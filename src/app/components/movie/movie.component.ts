import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {

  movie:any[] = [];
  returnTo:string = '';
  search:string = '';
  loadingMovie:boolean;
  errorMovie:boolean;

  constructor( public activatedRoute:ActivatedRoute, public _ms:MoviesService ) {

    this.loadingMovie = true;
    this.errorMovie = false;

    this.activatedRoute.params.
    subscribe( parametros => {
      // console.log(parametros);
      this.returnTo = parametros['pag'];
      
      if ( parametros['search'] ) {
        this.search = parametros['search'];
      }

      this._ms.getMovie( parametros['id'] )
      .subscribe( movie => {
        // console.log(movie);
        this.movie = movie;
        this.loadingMovie = false;
      }, () => {
        this.loadingMovie = false;
        this.errorMovie = true;
      });
    });

  }

}