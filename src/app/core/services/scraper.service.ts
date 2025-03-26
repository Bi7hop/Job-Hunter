import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  triggerScrape(platforms: string[], keywords?: string, location?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/jobs/scrape`, {
      platforms,
      keywords,
      location
    });
  }
}