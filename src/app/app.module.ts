import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { MoviesService } from './services/movies.service';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';

// Pipes
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { OverviewPipe } from './pipes/overview.pipe';
import { TaglinePipe } from './pipes/tagline.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NavbarComponent,
    LoadingComponent,
    SearchComponent,
    CardsComponent,
    MovieImagePipe,
    OverviewPipe,
    TaglinePipe,
    ErrorComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    JsonpModule
  ],

  providers: [
    MoviesService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }