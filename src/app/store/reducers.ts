import { combineReducers } from 'redux';
import { IAppState } from '../../types/batches.interface';

import { batch } from '../batches/store/reducer';

export const rootReducer = combineReducers<IAppState>({
  batch
});
