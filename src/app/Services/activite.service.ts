import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activite } from '../classes/activite';
import { Membres } from '../classes/membres';
import { Contact } from '../classes/contact';

const URL = "http://localhost:3000/Activites";
const URL1 = "http://localhost:3000/Commentaires";

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


  updateActivity(id:number,activity: Activite): Observable<Activite> {
    return this.http.put<Activite>(URL+"/"+id,activity);
  }


  deleteActivity(id: number) {
    return this.http.delete(URL+"/"+id)
  }

  public get Id(){
    return this.http.get('id');
  }
  addMember(newEvent: Membres): Observable<Membres> {
    return this.http.post<Membres>(URL, newEvent);
  }

  createMessage(message:Contact): Observable<Contact> {
    return this.http.post<Contact>(URL1,message);
  }

  getMessages(): Observable<Contact[]> {
    return this.http.get<Contact[]>(URL1);
  }
}

