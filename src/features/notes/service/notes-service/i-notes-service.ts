export interface INotesService {
  fetch(): Promise<INote[]>;
  add(color: string): Promise<any>;
  edit(payload: INotePayload): Promise<any>;
  remove(id: string): Promise<any>;
  favorite(): Promise<any>;
}

export type INote = {
  id: string;
  date: string;
  title: string;
  content: string;
  color: string;
  isPinned: boolean;
};

export type INotePayload = { id: string } & Partial<Omit<INote, 'date' | 'id'>>;
