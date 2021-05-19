import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  public cars: Car[] = [];

  constructor(
    private carsService: CarsService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe({
      next: (cars) => (this.cars = cars),
      error: (e) => console.log(e),
    });
  }

  openForm() {
    this.dialogService.openCarForm();
  }
}
