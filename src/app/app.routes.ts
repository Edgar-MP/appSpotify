import { RouterModule, Routes } from "@angular/router";

// Componentes
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from './components/artist/artist.component';

// Rutas
const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
]

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});