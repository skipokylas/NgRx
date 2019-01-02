import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { carReducer } from './redux/car.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ Cars: carReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
