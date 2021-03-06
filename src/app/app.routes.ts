import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},

	{
		path: 'search',
		component: SearchComponent
	},

	{
		path: 'search/:text',
		component: SearchComponent
	},

	{
		path: 'movie/:id/:pag',
		component: MovieComponent
	},

	{
		path: 'movie/:id/:pag/:search',
		component: MovieComponent
	},

	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home'
	}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });