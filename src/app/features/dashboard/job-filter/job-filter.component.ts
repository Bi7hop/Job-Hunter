import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent {
  @Input() jobTypes: string[] = [];
  @Input() experienceLevels: string[] = [];
  @Input() locations: string[] = [];
  
  @Output() searchEvent = new EventEmitter<any>();
  
  searchQuery = '';
  selectedJobType = 'All Types';
  selectedExperience = 'All Levels';
  selectedLocation = 'All Locations';
  
  onSearch(): void {
    this.searchEvent.emit({
      query: this.searchQuery,
      jobType: this.selectedJobType,
      experience: this.selectedExperience,
      location: this.selectedLocation
    });
  }
}