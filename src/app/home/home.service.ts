import { Injectable } from '@angular/core';
import { Note, Alltask, Overdue, Flag, Completedtask, Class } from './home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  // tslint:disable-next-line: variable-name
  private _classes: Class[] = [
    new Class(
      'CL1',
      10,
      'HCI',
      'lecture',
      '12:00 am',
      '1:00 pm',
      'Victor Lawuyi',
      'WLFB',

    ),
    new Class(
      'CL2',
      11,
      'Software Engineering',
      'lab',
      '2:00 pm',
      '3:00 pm',
      'David Jackson',
      'HWLL',
    ),
    new Class(
      'CL3',
      12,
      'Games and Design',
      'seminar',
      '3:00 pm',
      '4:00 pm',
      'Travis Scott',
      'ESGW',

    ),
    new Class(
      'CL4',
      13,
      'Advanced Topics',
      'exam',
      '4:00 pm',
      '5:00 pm',
      'Chris Brown',
      'Lect D',
    ),
    new Class(
      'CL5',
      14,
      'Cyber Security',
      'lecture',
      '5:00 pm',
      '6:00 pm',
      'Clark Kent',
      'Lect 202',
    )
  ];


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

  // tslint:disable-next-line: variable-name
  private _alltasks: Alltask[] = [
    new Alltask(
      'AT1',
      new Date('2019-02-12'),
      'Build sentien life',
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Alltask(
      'AT2',
      new Date('2020-02-18'),
      'Check if code smell',
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Alltask(
      'AT3',
      new Date('2020-02-20'),
      'Research Call of duty',
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Alltask(
      'AT4',
      new Date('2020-02-24'),
      'Study cloud service',
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Alltask(
      'AT5',
      new Date('2020-02-26'),
      'Build firewall',
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _completedtasks: Completedtask[] = [
    new Completedtask(
      'CT1',
      new Date('2019-02-12'),
      'Build sentien life',
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Completedtask(
      'CT2',
      new Date('2020-02-18'),
      'Check if code smell',
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Completedtask(
      'CT3',
      new Date('2020-02-20'),
      'Research Call of duty',
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Completedtask(
      'CT4',
      new Date('2020-02-24'),
      'Study cloud service',
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Completedtask(
      'CT5',
      new Date('2020-02-26'),
      'Build firewall',
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _flags: Flag[] = [
    new Flag(
      'FT1',
      new Date('2019-02-12'),
      'Build sentien life',
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Flag(
      'FT2',
      new Date('2020-02-18'),
      'Check if code smell',
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Flag(
      'FT3',
      new Date('2020-02-20'),
      'Research Call of duty',
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Flag(
      'FT4',
      new Date('2020-02-24'),
      'Study cloud service',
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Flag(
      'FT5',
      new Date('2020-02-26'),
      'Build firewall',
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _overdues: Overdue[] = [
    new Overdue(
      'OT1',
      new Date('2019-02-12'),
      'Build sentien life',
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Overdue(
      'OT2',
      new Date('2020-02-18'),
      'Check if code smell',
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Overdue(
      'OT3',
      new Date('2020-02-20'),
      'Research Call of duty',
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Overdue(
      'OT4',
      new Date('2020-02-24'),
      'Study cloud service',
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Overdue(
      'OT5',
      new Date('2020-02-26'),
      'Build firewall',
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];


// create get home, notes, alltask, completedtask, overdue, flag to duplicate array so changes are not made
  get classes() {
    return [...this._classes];
  }
  get notes() {
    return [...this._notes];
  }
  get alltasks() {
    return [...this._alltasks];
  }
  get completedtasks() {
    return [...this._completedtasks];
  }
  get overdues() {
    return [...this._overdues];
  }
  get flags() {
    return [...this._flags];
  }


  constructor() { }
}
