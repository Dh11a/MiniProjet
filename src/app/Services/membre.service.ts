import { Injectable } from '@angular/core';
import { Membres } from '../classes/membres';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL ="http://localhost:3000/Membres";
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) { }

  // Method to fetch activities from the server
  getMembres(): Observable<Membres[]> {
    return this.http.get<Membres[]>(URL);
  }
}
