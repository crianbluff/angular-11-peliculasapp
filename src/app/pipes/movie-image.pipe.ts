import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform( movie:any, poster:boolean = false ):string {

    let urlImage = 'http://image.tmdb.org/t/p/w500';

    if ( movie.backdrop_path && !poster ) {
      return urlImage + movie.backdrop_path;
    }

    else if ( movie.poster_path ) {
      return urlImage + movie.poster_path;
    }

    else {
      return 'assets/images/noimage.jpg';
    }
  }

}