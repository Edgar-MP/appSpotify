import { RouterModule, Routes } from "@angular/router";

// Componentes
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

// Rutas
const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
]

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});