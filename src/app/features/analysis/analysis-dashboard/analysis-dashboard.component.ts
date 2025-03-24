import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-analysis-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule
  ],
  templateUrl: './analysis-dashboard.component.html',
  styleUrls: ['./analysis-dashboard.component.scss']
})
export class AnalysisDashboardComponent {
  selectedDateRange = 'last30days';
  
  dateRanges = [
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'last30days', label: 'Last 30 Days' },
    { value: 'last90days', label: 'Last 90 Days' },
    { value: 'lastYear', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];
  
  jobTrendsData = [
    { date: '2025-01-01', count: 42 },
    { date: '2025-01-08', count: 53 },
    { date: '2025-01-15', count: 61 },
    { date: '2025-01-22', count: 48 },
    { date: '2025-02-01', count: 65 },
    { date: '2025-02-08', count: 72 },
    { date: '2025-02-15', count: 83 },
    { date: '2025-02-22', count: 95 },
    { date: '2025-03-01', count: 103 },
    { date: '2025-03-08', count: 114 },
    { date: '2025-03-15', count: 126 }
  ];
  
  topSkillsData = [
    { skill: 'React', count: 145 },
    { skill: 'TypeScript', count: 132 },
    { skill: 'Angular', count: 97 },
    { skill: 'Node.js', count: 86 },
    { skill: 'JavaScript', count: 78 },
    { skill: 'HTML/CSS', count: 65 },
    { skill: 'Vue.js', count: 54 },
    { skill: 'AWS', count: 42 },
    { skill: 'Docker', count: 38 },
    { skill: 'Python', count: 35 }
  ];
  
  platformDistributionData = [
    { platform: 'LinkedIn', percentage: 42 },
    { platform: 'Indeed', percentage: 28 },
    { platform: 'StepStone', percentage: 14 },
    { platform: 'Xing', percentage: 9 },
    { platform: 'Other', percentage: 7 }
  ];
  
  salaryRangeData = [
    { range: '< €40k', count: 12 },
    { range: '€40k - €60k', count: 48 },
    { range: '€60k - €80k', count: 76 },
    { range: '€80k - €100k', count: 43 },
    { range: '€100k - €120k', count: 16 },
    { range: '> €120k', count: 5 }
  ];

  updateDateRange(): void {
    console.log(`Datumsbereich auf ${this.selectedDateRange} geändert`);
  }
}