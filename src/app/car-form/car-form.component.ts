import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../redux/app.state';
import { AddCar } from '../redux/car.action';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carName = '';
  carModel = '';
  id = 3;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') { return; }
    this.id ++;
    const car = new Car (
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carName = '';
    this.carModel = '';
  }

}
