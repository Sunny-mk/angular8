import { createAction, props } from '@ngrx/store';
import { Items } from 'src/app/models/item';

export interface FormItem {
  item: Items;
  path: string[];
}

export const FORMCHANGE = createAction('[FORM] CHANGE', props<FormItem>());
export const FORMRESET = createAction('[FORM] RESET');
