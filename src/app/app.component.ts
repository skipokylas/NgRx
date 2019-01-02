import { Component, OnInit } from '@angular/core';
import { Cars } from './car.model';
import { Store } from '@ngrx/store';
import { IAppState } from './redux/app.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 public carState: Observable<Cars>;

 constructor(private store: Store<IAppState>) {}

 ngOnInit() {
  this.carState = this.store.select('Cars');
 }

}
