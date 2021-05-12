import { Routes } from '@angular/router';
import { CarsComponent } from '../components/cars/cars.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: 'cars',
    component: CarsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
