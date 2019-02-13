import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  
  @Input('movies') movies;
  @Input('title_movie') title_movie;
  @Input('loading') loading;
  @Input('error') error;

}