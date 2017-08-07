import { Reducer } from 'redux';
import { IBatch, IBatchStore, IAppState } from '../../../types/batches.interface';

export const batch: Reducer<IBatchStore> =
  (state: IBatchStore = { batches: [] }, action): IBatchStore => {
    switch (action.type) {
      case 'ADD_BATCH':
        return { batches: [...state.batches, action.payload] };
      default:
        return state;
    }
  };
