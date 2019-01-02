import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/car.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {

  }

  onDelete() {
   this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
  }

}
