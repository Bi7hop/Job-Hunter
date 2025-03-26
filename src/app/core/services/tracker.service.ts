import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tracker {
  id?: string;
  title: string;
  keywords: string[];
  location: string;
  jobType: string;
  minSalary: number;
  maxSalary: number;
  platforms: string[];
  matchCount?: number;
  created_at?: Date;
  updated_at?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  getAllTrackers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trackers`);
  }

  createTracker(tracker: Tracker): Observable<any> {
    return this.http.post(`${this.apiUrl}/trackers`, tracker);
  }

  deleteTracker(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/trackers/${id}`);
  }
}