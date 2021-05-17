import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
// import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-car',
  templateUrl: './dialog-car.component.html',
  styleUrls: ['./dialog-car.component.css'],
})
export class DialogCarComponent implements OnInit {
  constructor(private carsService: CarsService, private router: Router) {}

  form = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    price: new FormControl(''),
    imgUrl: new FormControl(''),
  });

  submitForm(): void {
    this.carsService.addCar(this.form.value).subscribe({
      next: (car) => this.router.navigateByUrl(`/cars/${car._id}`),
    });
  }

  ngOnInit(): void {}
}
