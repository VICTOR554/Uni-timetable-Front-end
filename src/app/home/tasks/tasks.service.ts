import { Injectable } from '@angular/core';
import { Overdue, Flag, Completedtask, Alltask } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // tslint:disable-next-line: variable-name
  private _alltasks: Alltask[] = [
    new Alltask(
      'AT1',
      'Build sentien life',
      new Date('2019-02-12'),
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Alltask(
      'AT2',
      'Check if code smell',
      new Date('2020-02-18'),
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Alltask(
      'AT3',
      'Research Call of duty',
      new Date('2020-02-20'),
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Alltask(
      'AT4',
      'Study cloud service',
      new Date('2020-02-24'),
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Alltask(
      'AT5',
      'Build firewall',
      new Date('2020-02-26'),
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _completedtasks: Completedtask[] = [
    new Completedtask(
      'CT1',
      'Study Irobot movie analysis',
      new Date('2019-02-12'),
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Completedtask(
      'CT2',
      'Does code rot',
      new Date('2020-02-18'),
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Completedtask(
      'CT3',
      'Create simulation',
      new Date('2020-02-20'),
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Completedtask(
      'CT4',
      'Build better cloud service',
      new Date('2020-02-24'),
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Completedtask(
      'CT5',
      'Stop virus from going',
      new Date('2020-02-26'),
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _flags: Flag[] = [
    new Flag(
      'FT1',
      'Stop Ultron',
      new Date('2019-02-12'),
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Flag(
      'FT2',
      'Learn how to create the matrix',
      new Date('2020-02-18'),
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Flag(
      'FT3',
      'Build Virtual Reality device',
      new Date('2020-02-20'),
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Flag(
      'FT4',
      'Study dissertation write up',
      new Date('2020-02-24'),
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Flag(
      'FT5',
      'Solve np vs npm',
      new Date('2020-02-26'),
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

  // tslint:disable-next-line: variable-name
  private _overdues: Overdue[] = [
    new Overdue(
      'OT1',
      'Build sentien life',
      new Date('2019-02-12'),
      'HCI',
      'Study the new article of advanced AI',
      'abc'


    ),
    new Overdue(
      'OT2',
      'Check if code smell',
      new Date('2020-02-18'),
      'Software Engineering',
      'Study the the lecture on code smells',
      'abc'

    ),
    new Overdue(
      'OT3',
      'Research Call of duty',
      new Date('2020-02-20'),
      'Games and Design',
      'Design Call of duty main frame',
      'abc'

    ),
    new Overdue(
      'OT4',
      'Study cloud service',
      new Date('2020-02-24'),
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Overdue(
      'OT5',
      'Build firewall',
      new Date('2020-02-26'),
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ];

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

  getAlltask(id: string) {
    return { ...this._alltasks.find(at => at.id === id) };
  }

  getCompletedtask(id: string) {
    return { ...this._completedtasks.find(ct => ct.id === id) };
  }

  getOverdue(id: string) {
    return { ...this._overdues.find(ov => ov.id === id) };
  }

  getFlag(id: string) {
    return { ...this._flags.find(fl => fl.id === id) };
  }
  constructor() { }
}
