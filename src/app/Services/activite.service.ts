import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activite } from '../classes/activite';

const URL = 'http://localhost:3000/Activites';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  // Method to fetch activities from the server
  getActivities(): Observable<Activite[]> {
    return this.http.get<Activite[]>(URL);
  }

  // Method to create a new activity on the server
  createActivity(activity: Activite): Observable<Activite> {
    return this.http.post<Activite>(URL, activity);
  }

  // Method to update an existing activity on the server
  updateActivity(activity: Activite): Observable<Activite> {
    const updateUrl = `${URL}/${activity.id}`;
    return this.http.put<Activite>(updateUrl, activity);
  }

  // Method to delete an activity from the server
  deleteActivity(activityId: number): Observable<void> {
    const deleteUrl = `${URL}/${activityId}`;
    return this.http.delete<void>(deleteUrl);
  }
}
