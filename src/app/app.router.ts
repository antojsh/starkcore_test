import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTravelComponent } from './add-travel/add-travel.component'

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'travel/add', component: AddTravelComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];