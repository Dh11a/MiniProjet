import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  joke: any;

  constructor(private jokeService: ApiserviceService) {}

  ngOnInit(): void {
    this.jokeService.getRandomJoke().subscribe(
      data => {
        console.log('Joke data:', data);
        this.joke = data;
      },
      error => {
        console.error('Error fetching joke:', error);
      }
    );
  }
}
