import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  
  search:string = '';
  loadingSearch:boolean;
  errorSearch:boolean;

  constructor( public activatedRoute:ActivatedRoute, public _ms:MoviesService ) {

    this.errorSearch = false;

    this.activatedRoute.params.
    subscribe( parametros => {
      // console.log(parametros);
      if ( parametros['text'] ) {
        this.search = parametros['text'];
        this.searchMovie();
      }
    });

  }

  searchMovie() {

    if ( this.search.length === 0 ) {
      return;
    }
    this.loadingSearch = true;
    this._ms.getSearchMovie( this.search )
    .subscribe( () => {
      this.loadingSearch = false
    }, () => {
      this.loadingSearch = false;
      this.errorSearch = true;
    });
    
  }

}