import { v4 as uuidv4 } from 'uuid';

import { INotesService, INote, INotePayload } from './i-notes-service';

export class NotesLocalStorageService implements INotesService {
  async fetch(): Promise<INote[]> {
    await new Promise((r) => setTimeout(r, 200));

    const notes = this.getNotesStorage();

    return Promise.resolve(notes);
  }

  async add(color: string): Promise<any> {
    const newNote: INote = {
      content: 'This is a Docket note.',
      date: new Date().toString(),
      title: '',
      id: uuidv4(),
      color,
    };

    const notes = this.getNotesStorage();
    this.setNotesStorage([newNote, ...notes]);

    return Promise.resolve('A new Note was just added.');
  }

  async remove(id: string): Promise<any> {
    const notes = this.getNotesStorage();

    const newNotes = notes.filter((note) => note.id !== id);

    this.setNotesStorage(newNotes);

    return Promise.resolve('Note deleted with success.');
  }

  async edit(payload: INotePayload): Promise<any> {
    const notes = this.getNotesStorage();

    const newNotes = notes.map((note) => {
      if (payload.id === note.id) {
        return {
          ...note,
          ...payload,
        };
      }

      return note;
    });

    this.setNotesStorage(newNotes);

    return Promise.resolve('Note edited with success.');
  }

  async favorite(): Promise<any> {}

  private getNotesStorage() {
    const rawNotes = window.localStorage.getItem('DOCKET_NOTES') || '[]';
    const parsed = JSON.parse(rawNotes) as INote[];

    return parsed;
  }

  private setNotesStorage(newNotes: INote[]) {
    window.localStorage.setItem('DOCKET_NOTES', JSON.stringify(newNotes));
  }
}
