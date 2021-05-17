import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { shared } from '../shared/shared';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private carsUrl = shared.url + '/api/cars/';

  public cars: Car[] = [];

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }
  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(this.carsUrl + id);
  }
  addCar(formData: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, formData);
  }
  editCar(formData: Car): Observable<Car> {
    return this.http.put<Car>(this.carsUrl + formData._id, formData);
  }
  deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(this.carsUrl + id);
  }
}
