import { Injectable } from '@angular/core';
import { Note } from './notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // tslint:disable-next-line: variable-name
  private _notes: Note[] = [
    new Note(
      'N1',
      'Calender Problems',
      'HCI',
      'HCI talks about interaction between the system',
      'abc'

    ),
    new Note(
      'N2',
      'Tabs',
      'Software Engineering',
      'Software Engineering ia about how effective the system is',
      'abc'

    ),
    new Note(
      'N3',
      'Ionic',
      'Games and Design',
      'Teaches you how to manipulate pixels to create games of your own design',
      'abc'

    ),
    new Note(
      'N4',
      'Block Chain in the supply chain',
      'Advanced Topics',
      'Teaches you about cloud service and different data types',
      'abc'

    ),
    new Note(
      'N5',
      'Dissertation',
      'Cyber Security',
      'Teaches you how to create firewalls to stop hackers',
      'abc'
    )

  ];
  // Clone the notes array using spread operator  to stop data manipulation from outside notes service
  get notes() {
    return [...this._notes];
  }


  getNote(id: string) {
    return { ...this._notes.find(n => n.id === id) };
  }


  constructor() { }
}
