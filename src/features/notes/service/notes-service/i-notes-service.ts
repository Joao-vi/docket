export interface INotesService {
  fetch(): Promise<any>;
  add(): Promise<any>;
  edit(): Promise<any>;
  remove(): Promise<any>;
  favorite(): Promise<any>;
}
