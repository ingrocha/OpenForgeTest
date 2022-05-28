import { inMenu, offMenu } from './clickMenu.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initialState = false;

const reducer = createReducer(
  initialState,
  on(inMenu, () => true),
  on(offMenu, () => false)
);

export const clickMenuReducer = (state: boolean, action: Action): boolean =>
  reducer(state, action);
