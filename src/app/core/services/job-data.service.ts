import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  salary?: string;
  url: string;
  source: string;
  posted_date?: Date;
  created_at: Date;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class JobDataService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  getAllJobs(limit = 100, offset = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs`, {
      params: { limit: limit.toString(), offset: offset.toString() }
    });
  }

  searchJobs(keywords?: string, location?: string, limit = 100, offset = 0): Observable<any> {
    const params: any = { limit: limit.toString(), offset: offset.toString() };
    
    if (keywords) params.keywords = keywords;
    if (location) params.location = location;
    
    return this.http.get(`${this.apiUrl}/jobs/search`, { params });
  }
}