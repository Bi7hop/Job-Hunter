import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Freelance'];
  selectedJobType = 'All';

  recentJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp GmbH',
      location: 'Berlin',
      tags: ['Full-time', 'Remote'],
      postedTime: '2 hours ago',
      source: 'LinkedIn',
      initialColor: '#5e72e4'
    },
    {
      id: 2,
      title: 'Frontend Developer (React)',
      company: 'DigitalSolutions',
      location: 'Berlin/Mitte',
      tags: ['Full-time', 'On-site', '€65k/year'],
      postedTime: '4 hours ago',
      source: 'StepStone',
      initialColor: '#2dce89'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'InnoTech',
      location: 'Remote (Germany)',
      tags: ['Contract', 'Remote', '€90k-€100k/year'],
      postedTime: '8 hours ago',
      source: 'Indeed',
      initialColor: '#11cdef'
    }
  ];

  filterJobs(filters: any): void {
    console.log('Filtering jobs with:', filters);

  }
}