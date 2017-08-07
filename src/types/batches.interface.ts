export interface IBatch {
  id: number;
  name: string;
  grape: string;
  startDate: Date;
}

export interface IBatchStore {
  batches: IBatch[];
}

export interface IAppState {
  batch: IBatchStore;
}
