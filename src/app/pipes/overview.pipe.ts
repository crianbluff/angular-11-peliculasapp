import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform( value:string, ellipsis:boolean = false ):string {

    if ( value === '' ) {
      return 'Lo lamentamos no se encontro descripción de la película';
    }

    else if ( ellipsis ) {
      return value + '...';
    }

    else {
      return value;
    }

  }

}