import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private readonly apiUrl = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  }
