import { Routes } from '@angular/router';
import { CarViewComponent } from '../components/car-view/car-view.component';
import { CarsComponent } from '../components/cars/cars.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: 'cars/:id',
    component: CarViewComponent,
  },
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
