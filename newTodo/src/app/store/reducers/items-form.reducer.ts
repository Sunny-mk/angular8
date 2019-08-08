import { createReducer, on } from '@ngrx/store';
import { FORMCHANGE, FORMRESET } from '../action/items-form.action';

// export interface ItemFormState {
//   id: number;
//   itemName: string;
//   itemType: string;
//   itemDate: string;
//   itemPerson: string;
//   itemPriority: string;
//   itemState: string;
//   itemReamkes: string;
// }

// export const initItemFormState: ItemFormState = {
//   id: 0,
//   itemName: '',
//   itemType: '',
//   itemDate: '',
//   itemPerson: '',
//   itemPriority: '',
//   itemState: '',
//   itemReamkes: '',
// };
// export const ItemFormReducer = createReducer(
//   initItemFormState,
//   on(FORMCHANGE, (state, action) => {
//     state.id = action.item.id;
//     state.itemDate = action.item.itemDate;
//     state.itemName = action.item.itemName;
//     state.itemPerson = action.item.itemPerson;
//     state.itemPriority = action.item.itemPriority;
//     state.itemState = action.item.itemState;
//     state.itemType = action.item.itemType;
//     state.itemReamkes = action.item.itemReamkes;
//     return state;
//   }),
//   on(FORMRESET, state => state = initItemFormState)
// );


export interface ItemFormState {
  ITEMID: number;
  ITEMNAME: string;
  ITEMTYPE: string;
  ITEMDATE: string;
  ITEMPERSON: string;
  ITEMPRIORITY: string;
  ITEMSTATE: string;
  ITEMREAMKES: string;
}

export const  initItemFormState: ItemFormState = {
  ITEMID: 0,
  ITEMNAME: '',
  ITEMTYPE: '',
  ITEMDATE: '',
  ITEMPERSON: '',
  ITEMPRIORITY: '',
  ITEMSTATE: '',
  ITEMREAMKES: '',
};
export const ItemFormReducer = createReducer(
  initItemFormState,
  on(FORMCHANGE, (state, action) => {
    state.ITEMID = action.item.id;
    state.ITEMNAME = action.item.itemName;
    state.ITEMTYPE = action.item.itemType;
    state.ITEMDATE = action.item.itemDate;
    state.ITEMPERSON = action.item.itemPerson;
    state.ITEMPRIORITY = action.item.itemPriority;
    state.ITEMSTATE = action.item.itemState;
    state.ITEMREAMKES = action.item.itemReamkes;
    return state;
  }),
  on(FORMRESET, state => state = initItemFormState)
);
