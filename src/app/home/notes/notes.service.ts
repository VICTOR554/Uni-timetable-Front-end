import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class NotesService {



  // tslint:disable-next-line: variable-name
  private _notes = new BehaviorSubject<Note[]>([

  ]);

  // Clone the notes array using spread operator  to stop data manipulation from outside notes service
  get notes() {
    return this._notes.asObservable();
  }

  getAllNotes() {
    return this.http.get('http://localhost:3000/student/note/',   this.authService.httpOptions);
  }

  getNote(noteId: string) {
    console.log(noteId);
    return this.http.get('http://localhost:3000/student/note/one/' + noteId, this.authService.httpOptions);

  }

  constructor(private authService: AuthService, private http: HttpClient) { }


  // tslint:disable-next-line: variable-name
  addNote(title: string, module_code: string, body: string) {
    // tslint:disable-next-line: variable-name
    const date_time = +moment.unix(Date.now()).format('X');
    console.log(this.authService.httpOptions.headers);
    const newNote = new Note(
      title,
      module_code,
      body,
      date_time,
    );
    return this.http.post('http://localhost:3000/student/note/new', newNote, this.authService.httpOptions);
  }


  // tslint:disable-next-line: variable-name
  updateNote( title: string, module_code: string, body: string, noteId: string) {
    // tslint:disable-next-line: variable-name
    const date_time = +moment.unix(Date.now()).format('X');
    console.log(this.authService.httpOptions.headers);
    const updatedNote = new Note(
      title,
      module_code,
      body,
      date_time,
    );
    return this.http.put('http://localhost:3000/student/note/edit/' + noteId, updatedNote, this.authService.httpOptions);
  }

  deleteNote(noteId: string) {
    return this.http.delete('http://localhost:3000/student/note/delete/' + noteId, this.authService.httpOptions);
  }

}
