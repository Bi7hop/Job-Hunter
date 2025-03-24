import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './help-home.component.html',
  styleUrls: ['./help-home.component.scss']
})
export class HelpHomeComponent {
  searchQuery = '';
  
  faqItems = [
    {
      question: 'How do I set up job alerts?',
      answer: 'To set up job alerts, go to the Job Tracker section and click on "Create Alert". You can customize alert criteria based on job title, location, and frequency of notifications.'
    },
    {
      question: 'How does the job scraping work?',
      answer: 'Our system automatically scans multiple job portals including LinkedIn, Indeed, and StepStone to find matching positions based on your criteria. The scraper runs several times daily to ensure you get the latest postings.'
    },
    {
      question: 'Can I track my job applications?',
      answer: 'Yes! When you find a job you\'ve applied to, click "Mark as Applied" and you\'ll be able to track its status in the Applications tab. You can add notes and set reminders for follow-ups.'
    },
    {
      question: 'Is my data secure?',
      answer: 'We take data security seriously. All your information is encrypted and stored securely. We never share your personal data with third parties without your explicit consent.'
    },
    {
      question: 'How do I connect my email to track application responses?',
      answer: 'Go to Settings, select the "Accounts" tab, and click "Connect Email". You\'ll be guided through a secure authentication process to allow the app to check for responses from employers.'
    }
  ];
  
  helpCategories = [
    {
      title: 'Getting Started',
      icon: 'play_circle',
      link: '#',
      description: 'Learn the basics of using JobScraper'
    },
    {
      title: 'Job Tracking',
      icon: 'work',
      link: '#',
      description: 'How to track and manage job applications'
    },
    {
      title: 'Alerts Setup',
      icon: 'notifications',
      link: '#',
      description: 'Configure custom job alerts'
    },
    {
      title: 'Account Settings',
      icon: 'settings',
      link: '#',
      description: 'Manage your profile and preferences'
    },
    {
      title: 'Troubleshooting',
      icon: 'help',
      link: '#',
      description: 'Solutions to common issues'
    },
    {
      title: 'Contact Support',
      icon: 'support_agent',
      link: '#',
      description: 'Get help from our support team'
    }
  ];
  
  get filteredFaq() {
    if (!this.searchQuery.trim()) {
      return this.faqItems;
    }
    
    const search = this.searchQuery.toLowerCase();
    return this.faqItems.filter(item => 
      item.question.toLowerCase().includes(search) || 
      item.answer.toLowerCase().includes(search)
    );
  }
}