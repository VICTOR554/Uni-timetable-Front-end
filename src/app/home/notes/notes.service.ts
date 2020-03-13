import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // tslint:disable-next-line: variable-name
  private _notes = new BehaviorSubject<Note[]>([
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

  ]);
  // Clone the notes array using spread operator  to stop data manipulation from outside notes service
  get notes() {
    return this._notes.asObservable();
  }


  getNote(id: string) {
    return this.notes.pipe(take(1),
      map(notes => {
        return { ...notes.find(n => n.id === id) };
      })
    );
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  addNote(title: string, modul: string, description: string) {
    const newNote = new Note(
      Math.random().toString(),
      title,
      modul,
      description,
      this.authService.userId
    );
    // return this.http.post('')
    return this.notes.pipe(take(1), delay(1000), tap(notes => {
      this._notes.next(notes.concat(newNote));
    })
    );
  }

  updateNote(noteId: string, title: string, modul: string, description: string) {
    return this.notes.pipe(
      take(1),
      delay(1000),
      tap(notes => {
        const updatedNoteIndex = notes.findIndex(no => no.id === noteId);
        const updatedNotes = [...notes];
        const oldNote = updatedNotes[updatedNoteIndex];
        updatedNotes[updatedNoteIndex] = new Note(
          oldNote.id,
          title,
          modul,
          description,
          oldNote.userId
        );
        this._notes.next(updatedNotes);
      })
    );
  }

  cancelNote(noteId: string) {
    return this.notes.pipe(
      take(1),
      delay(1000),
      tap(notes => {
        this._notes.next(notes.filter(n => n.id !== noteId));
      })
    );
  }

}
