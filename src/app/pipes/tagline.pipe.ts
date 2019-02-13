import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagline'
})
export class TaglinePipe implements PipeTransform {

  transform( value:string ):string {

    if ( value === '' ) {
      return 'Lo lamentamos no se encontro frase celebre de la película';
    } else {
        return value;
      }

  }

}