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


  getActivities(): Observable<Activite[]> {
    return this.http.get<Activite[]>(URL);
  }

 
  createActivity(activity: Activite): Observable<Activite> {
    return this.http.post<Activite>(URL,activity);
  }


  updateActivity(activity: Activite): Observable<Activite> {
    const updateUrl = `${URL}/${activity.id}`;
    return this.http.put<Activite>(updateUrl, activity);
  }


  deleteActivity(id: number) {
    return this.http.delete(URL+"/"+id)
  }
}
