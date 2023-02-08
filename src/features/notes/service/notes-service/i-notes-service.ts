export interface INotesService {
  fetch(): Promise<INote[]>;
  add(): Promise<any>;
  edit(editNote: INote): Promise<any>;
  remove(id: string): Promise<any>;
  favorite(): Promise<any>;
}

export type INote = {
  id: string;
  date: string;
  title: string;
  content: string;
};
