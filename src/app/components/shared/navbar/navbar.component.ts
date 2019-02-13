import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private router:Router ) { }

  searchMovie( text:string ) {

    if ( text.length === 0 ) {
      return;
    }

    this.router.navigate( ['search', text] );
  }
  
}