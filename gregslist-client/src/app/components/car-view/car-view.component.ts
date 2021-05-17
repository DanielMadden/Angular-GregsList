import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css'],
})
export class CarViewComponent implements OnInit {
  private sub: any;
  private id!: string;
  public car!: Car;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.carsService.getCar(params.id).subscribe((car) => (this.car = car));
    });
  }

  deleteCar() {
    this.carsService.deleteCar(this.id).subscribe(() => {
      this.router.navigateByUrl('/cars');
    });
  }
}
