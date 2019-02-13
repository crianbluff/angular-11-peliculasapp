import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {

  private apiKey:string = '7470b91517b2744fee8914d58b63395d';
  private urlMovieDb:string = 'https://api.themoviedb.org/3';
  movies:any[] = [];

  constructor( private jsonp:Jsonp ) { }

  getTheaters() {

    let from = new Date();
    let to = new Date();
    to.setDate( to.getDate() + 7 );
    let fromStr = `${ from.getFullYear() }-${ from.getMonth() + 1 }-${ from.getDate() }`;
    let toStr = `${ to.getFullYear() }-${ to.getMonth() + 1 }-${ to.getDate() }`;

    let url = `${ this.urlMovieDb }/discover/movie?primary_release_date.gte=${ fromStr }&primary_release_date.lte=${ toStr }&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .map( res => res.json().results );

  }

  getPopulars() {

    let url = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .map( res => res.json().results );

  }

  getPopularsKids() {

    let url = `${ this.urlMovieDb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
    .map( res => res.json().results );
  }

  getSearchMovie( text:string ) {

    let url = `${ this.urlMovieDb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .map( res =>  {
      // console.log( 'Buscando :', res.json().results );
      this.movies = res.json().results;
    });
  }

  getMovie( id:string ) {

    let url = `${ this.urlMovieDb }/movie/${ id }?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .map( res => res.json() );
  }

}