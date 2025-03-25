import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss']
})
export class StatisticsCardComponent {
  @Input() card: {
    title: string;
    value: string | number;
    icon: string;
    color: string;
    increase: boolean;
    percentage: number;
  } = {
    title: '',
    value: '',
    icon: '',
    color: '',
    increase: true,
    percentage: 0
  };
}