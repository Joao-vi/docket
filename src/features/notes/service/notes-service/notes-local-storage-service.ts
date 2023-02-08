import { INotesService } from './i-notes-service';

export class NotesLocalStorageService implements INotesService {
  async fetch(): Promise<any> {}

  async edit(): Promise<any> {}

  async add(): Promise<any> {}

  async favorite(): Promise<any> {}

  async remove(): Promise<any> {}
}
