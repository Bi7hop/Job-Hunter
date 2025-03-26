import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-tracker-config',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDividerModule
  ],
  templateUrl: './tracker-config.component.html',
  styleUrls: ['./tracker-config.component.scss']
})
export class TrackerConfigComponent {
  minSalary: number = 40000;
  maxSalary: number = 80000;
  
  activeTrackers = [
    {
      id: 1,
      title: 'Frontend Developer',
      keywords: ['React', 'Angular', 'TypeScript'],
      location: 'Berlin',
      jobType: 'Full-time',
      salary: '€60,000 - €80,000',
      lastUpdated: '2 hours ago',
      platforms: ['LinkedIn', 'Indeed', 'StepStone'],
      matchCount: 43
    },
    {
      id: 2,
      title: 'UX Designer',
      keywords: ['Figma', 'UI Design', 'Prototyping'],
      location: 'Remote',
      jobType: 'Contract',
      salary: '€50,000 - €70,000',
      lastUpdated: '1 day ago',
      platforms: ['Dribbble', 'LinkedIn', 'Indeed'],
      matchCount: 18
    }
  ];

  availablePlatforms = [
    { name: 'LinkedIn', logo: 'assets/platforms/linkedin.png', isSelected: true },
    { name: 'Indeed', logo: 'assets/platforms/indeed.png', isSelected: true },
    { name: 'StepStone', logo: 'assets/platforms/stepstone.png', isSelected: true },
    { name: 'Monster', logo: 'assets/platforms/monster.png', isSelected: false },
    { name: 'Glassdoor', logo: 'assets/platforms/glassdoor.png', isSelected: false },
    { name: 'Xing', logo: 'assets/platforms/xing.png', isSelected: false }
  ];

  showNewTrackerForm = false;
  
  updateMinSalary(event: any): void {
    this.minSalary = event.value;
  }
  
  updateMaxSalary(event: any): void {
    this.maxSalary = event.value;
  }

  toggleNewTrackerForm(): void {
    this.showNewTrackerForm = !this.showNewTrackerForm;
  }

  createNewTracker(): void {
    console.log('Neuer Tracker erstellt');
    this.showNewTrackerForm = false;
  }


  deleteTracker(id: number): void {
    console.log(`Tracker ${id} gelöscht`);
  }

  editTracker(id: number): void {
    console.log(`Tracker ${id} bearbeiten`);
  }
}