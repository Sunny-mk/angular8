import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/models/personnel';

export interface FormSet {
  item: Person;
  path: string[];
}

export const FORMCHANGE = createAction('[FORM] CHANGE', props<FormSet>());
export const FORMRESET = createAction('[FORM] RESET');
