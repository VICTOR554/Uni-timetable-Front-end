import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private authService: AuthService, private http: HttpClient) { }
  getAllNotes() {
    return this.http.get('https://timetable-plus.herokuapp.com/student/note/', this.authService.httpOptions);
  }

  getNote(noteId: string) {
    console.log(noteId);
    return this.http.get('https://timetable-plus.herokuapp.com/student/note/one/' + noteId, this.authService.httpOptions);

  }
  GetModule(moduleCode: string) {
    return this.http.get('https://timetable-plus.herokuapp.com/student/module/' + moduleCode, this.authService.httpOptions);
  }

  // tslint:disable-next-line: variable-name
  addNote(title: string, module_code: string, body: string) {
    // tslint:disable-next-line: variable-name
    const date_time = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const newNote = new Note(
      title,
      module_code,
      body,
      date_time,
    );
    return this.http.post('https://timetable-plus.herokuapp.com/student/note/new', newNote, this.authService.httpOptions);
  }

  // tslint:disable-next-line: variable-name
  updateNote(title: string, module_code: string, body: string, noteId: string) {
    // tslint:disable-next-line: variable-name
    const date_time = +moment().format('X');
    console.log(this.authService.httpOptions.headers);
    const updatedNote = new Note(
      title,
      module_code,
      body,
      date_time,
    );
    return this.http.put('https://timetable-plus.herokuapp.com/student/note/edit/' + noteId, updatedNote, this.authService.httpOptions);
  }

  deleteNote(noteId: string) {
    return this.http.delete('https://timetable-plus.herokuapp.com/student/note/delete/' + noteId, this.authService.httpOptions);
  }

}
