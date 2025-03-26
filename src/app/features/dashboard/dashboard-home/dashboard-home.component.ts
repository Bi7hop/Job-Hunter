import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { JobDataService } from '../../../core/services/job-data.service';
import { ScraperService } from '../../../core/services/scraper.service';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Freelance'];
  selectedJobType = 'All';
  
  searchQuery: string = '';
  selectedLocation: string = '';
  
  recentJobs: any[] = [];
  isLoading: boolean = false;
  totalJobs: number = 0;
  newToday: number = 0;
  avgSalary: string = '€65k'; // Standardwert, später dynamisch berechnen

  constructor(
    private jobDataService: JobDataService,
    private scraperService: ScraperService
  ) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.isLoading = true;
    this.jobDataService.getAllJobs().subscribe({
      next: (response) => {
        // Wandle Backend-Jobs in das Frontend-Format um
        this.recentJobs = response.data.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company,
          location: job.location,
          tags: this.generateTags(job),
          postedTime: this.formatPostedTime(job.posted_date || job.created_at),
          source: job.source,
          initialColor: this.getRandomColor(job.company),
          url: job.url
        }));
        
        this.totalJobs = response.count;
        this.calculateNewToday(response.data);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading jobs:', error);
        this.isLoading = false;
      }
    });
  }

  searchJobs(): void {
    this.isLoading = true;
    this.jobDataService.searchJobs(this.searchQuery, this.selectedLocation).subscribe({
      next: (response) => {
        this.recentJobs = response.data.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company,
          location: job.location,
          tags: this.generateTags(job),
          postedTime: this.formatPostedTime(job.posted_date || job.created_at),
          source: job.source,
          initialColor: this.getRandomColor(job.company),
          url: job.url
        }));
        
        this.totalJobs = response.count;
        this.calculateNewToday(response.data);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching jobs:', error);
        this.isLoading = false;
      }
    });
  }

  triggerScrape(): void {
    const platforms = ['linkedin', 'indeed', 'stepstone'];
    this.isLoading = true;
    this.scraperService.triggerScrape(platforms, this.searchQuery, this.selectedLocation).subscribe({
      next: (response) => {
        console.log('Scraping triggered:', response);
        this.loadJobs(); // Lade die Jobs neu nach dem Scraping
      },
      error: (error) => {
        console.error('Error triggering scrape:', error);
        this.isLoading = false;
      }
    });
  }

  filterJobs(filters: any): void {
    console.log('Filtering jobs with:', filters);
    this.searchJobs();
  }

  // Hilfsmethoden
  private getRandomColor(seed: string): string {
    // Einfache deterministische Funktion, um Farbe aus Firmennamen zu generieren
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }

  private formatPostedTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  }

  private generateTags(job: any): string[] {
    const tags: string[] = [];
    
    // Beispiel-Logik für Tag-Generierung
    // In einer echten Anwendung würdest du vielleicht Keywords aus der Jobbeschreibung extrahieren
    if (job.location.toLowerCase().includes('remote')) {
      tags.push('Remote');
    } else {
      tags.push('On-site');
    }
    
    // Standard-Jobtyp hinzufügen
    tags.push('Full-time');
    
    // Wenn Gehalt vorhanden ist, als Tag hinzufügen
    if (job.salary) {
      tags.push(job.salary);
    }
    
    return tags;
  }

  private calculateNewToday(jobs: any[]): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    this.newToday = jobs.filter(job => {
      const jobDate = new Date(job.posted_date || job.created_at);
      return jobDate >= today;
    }).length;
  }
}