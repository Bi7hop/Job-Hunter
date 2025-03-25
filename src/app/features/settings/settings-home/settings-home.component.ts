import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent {
  darkModeEnabled = true;
  emailNotificationsEnabled = true;
  pushNotificationsEnabled = false;
  autoApplyEnabled = false;
  
  jobAlertFrequency = 'daily';
  language = 'english';
  
  frequencyOptions = [
    { value: 'realtime', label: 'Real-time' },
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' }
  ];
  
  languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'german', label: 'Deutsch' },
    { value: 'french', label: 'Français' },
    { value: 'spanish', label: 'Español' }
  ];
  
  saveSettings(): void {
    console.log('Settings saved');
  }
}