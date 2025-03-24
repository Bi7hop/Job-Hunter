import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./app/core/layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () => 
          import('./app/features/dashboard/dashboard-home/dashboard-home.component').then(m => m.DashboardHomeComponent)
      },
      {
        path: 'job-tracker',
        loadComponent: () => 
          import('./app/features/job-tracker/tracker-config/tracker-config.component').then(m => m.TrackerConfigComponent)
      },
      {
        path: 'analysis',
        loadComponent: () => 
          import('./app/features/analysis/analysis-dashboard/analysis-dashboard.component').then(m => m.AnalysisDashboardComponent)
      },
      {
        path: 'settings',
        loadComponent: () => 
          import('./app/features/settings/settings-home/settings-home.component').then(m => m.SettingsHomeComponent)
      },
      {
        path: 'help',
        loadComponent: () => 
          import('./app/features/help/help-home/help-home.component').then(m => m.HelpHomeComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));