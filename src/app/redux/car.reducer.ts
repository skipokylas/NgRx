
import { Action } from '@ngrx/store';
import { Car } from '../car.model';
import { CAR_ACTION, CarActions } from './car.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Ford', '12.12.12', 'Fiesta', false, 2)
  ]
};

export function carReducer(state = initialState, action: CarActions) {
  switch (action.type) {

    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };

    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter((c) => {
          return c.id !== action.payload.id;
        })]
       };

    case CAR_ACTION.UPDATE_CAR:
       const idx = state.cars.findIndex((c) => {
        return c.id === action.payload.id;
       });
       state.cars[idx].isSold = true;
       return {
         ...state,
         cars: [...state.cars]
        };

    default:
      return state;
  }

}
