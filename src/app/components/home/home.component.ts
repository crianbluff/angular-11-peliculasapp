import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  billboard:any = [];
  populars:any = [];
  popularsKids:any = [];
  loading:boolean;
  error:boolean;
  messageError:string;

  constructor( public _ms:MoviesService ) {

    this.loading = true;
    this.error = false;

    this._ms.getTheaters()
    .subscribe( data => {
      // console.log('En Cartelera :', data);
      this.billboard = data;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.error = true;
    });

    this._ms.getPopulars()
    .subscribe( data => {
      // console.log('Populares :', data);
      this.populars = data;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.error = true;
      this.messageError = 'El apiKey es incorrecto';
    });

    this._ms.getPopularsKids()
    .subscribe( data => {
      //console.log('Populares Niños:', data);
      this.popularsKids = data;
      this.loading = false;
    }, () => {
      this.loading = false;
      this.error = true;
      this.messageError = 'El apiKey es incorrecto';
    });

  }

}