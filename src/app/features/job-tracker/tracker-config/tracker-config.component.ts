import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { TrackerService, Tracker } from '../../../core/services/tracker.service';
import { ErrorMessageComponent } from '../../../shared/error-message/error-message.component';

@Component({
  selector: 'app-tracker-config',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    ErrorMessageComponent
  ],
  templateUrl: './tracker-config.component.html',
  styleUrls: ['./tracker-config.component.scss']
})
export class TrackerConfigComponent implements OnInit {
  minSalary: number = 40000;
  maxSalary: number = 80000;
  jobTitle: string = '';
  jobLocation: string = '';
  keywords: string = '';
  selectedJobType: string = 'all';
  
  activeTrackers: any[] = [];
  isLoading: boolean = false;

  availablePlatforms = [
    { name: 'LinkedIn', logo: 'assets/platforms/linkedin.png', isSelected: true },
    { name: 'Indeed', logo: 'assets/platforms/indeed.png', isSelected: true },
    { name: 'StepStone', logo: 'assets/platforms/stepstone.png', isSelected: true },
    { name: 'Monster', logo: 'assets/platforms/monster.png', isSelected: false },
    { name: 'Glassdoor', logo: 'assets/platforms/glassdoor.png', isSelected: false },
    { name: 'Xing', logo: 'assets/platforms/xing.png', isSelected: false }
  ];

  showNewTrackerForm = false;

  // Notification properties
  notificationTitle: string = '';
  notificationMessage: string = '';
  showNotification: boolean = false;
  
  constructor(private trackerService: TrackerService) {}

  ngOnInit(): void {
    this.loadTrackers();
  }
  
  loadTrackers(): void {
    this.isLoading = true;
    this.trackerService.getAllTrackers().subscribe({
      next: (response) => {
        // Format the tracker data for display
        this.activeTrackers = response.data.map((tracker: any) => ({
          id: tracker.id,
          title: tracker.title,
          keywords: tracker.keywords || [],
          location: tracker.location || '',
          jobType: tracker.job_type || 'All',
          salary: `€${tracker.min_salary?.toLocaleString() || '0'} - €${tracker.max_salary?.toLocaleString() || '0'}`,
          lastUpdated: this.formatTimeAgo(tracker.updated_at),
          platforms: tracker.platforms || [],
          matchCount: tracker.matchCount || 0
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading trackers:', error);
        this.isLoading = false;
      }
    });
  }
  
  updateMinSalary(event: any): void {
    this.minSalary = event.value;
  }
  
  updateMaxSalary(event: any): void {
    this.maxSalary = event.value;
  }

  toggleNewTrackerForm(): void {
    this.showNewTrackerForm = !this.showNewTrackerForm;
    
    if (!this.showNewTrackerForm) {
      // Reset the form
      this.resetForm();
    }
  }

  resetForm(): void {
    this.jobTitle = '';
    this.jobLocation = '';
    this.keywords = '';
    this.selectedJobType = 'all';
    this.minSalary = 40000;
    this.maxSalary = 80000;
    
    this.availablePlatforms.forEach(platform => {
      platform.isSelected = ['LinkedIn', 'Indeed', 'StepStone'].includes(platform.name);
    });
  }

  createNewTracker(): void {
    if (!this.jobTitle) {
      this.showNotificationMessage('Fehler', 'Bitte gib einen Job-Titel ein');
      return;
    }
    
    const keywordsArray = this.keywords
      ? this.keywords.split(',').map(k => k.trim())
      : [];
    
    const selectedPlatforms = this.availablePlatforms
      .filter(p => p.isSelected)
      .map(p => p.name);
    
    const newTracker: Tracker = {
      title: this.jobTitle,
      keywords: keywordsArray,
      location: this.jobLocation,
      jobType: this.selectedJobType,
      minSalary: this.minSalary,
      maxSalary: this.maxSalary,
      platforms: selectedPlatforms
    };
    
    this.isLoading = true;
    
    this.trackerService.createTracker(newTracker).subscribe({
      next: () => {
        this.showNotificationMessage('Erfolg', 'Tracker erfolgreich erstellt!');
        this.loadTrackers();
        this.toggleNewTrackerForm();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error creating tracker:', error);
        this.showNotificationMessage('Fehler', 'Fehler beim Erstellen des Trackers');
        this.isLoading = false;
      }
    });
  }

  deleteTracker(id: string): void {
    if (confirm('Bist du sicher, dass du diesen Tracker löschen möchtest?')) {
      this.isLoading = true;
      this.trackerService.deleteTracker(id).subscribe({
        next: () => {
          this.showNotificationMessage('Erfolg', 'Tracker erfolgreich gelöscht!');
          this.loadTrackers();
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error deleting tracker:', error);
          this.showNotificationMessage('Fehler', 'Fehler beim Löschen des Trackers');
          this.isLoading = false;
        }
      });
    }
  }

  editTracker(id: string): void {
    console.log(`Tracker ${id} bearbeiten`);
    // In einer erweiterten Version würdest du hier den Tracker laden und das Formular befüllen
  }

  // Helper method to format timestamps
  formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  }

  // Notification methods
  showNotificationMessage(title: string, message: string): void {
    this.notificationTitle = title;
    this.notificationMessage = message;
    this.showNotification = true;
    // Auto-clear notification after 3 seconds
    setTimeout(() => {
      this.clearNotification();
    }, 3000);
  }

  clearNotification(): void {
    this.showNotification = false;
  }
}
