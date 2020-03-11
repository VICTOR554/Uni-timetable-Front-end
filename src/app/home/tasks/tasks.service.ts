import { Injectable } from '@angular/core';
import { Overdue, Flag, Completedtask, Alltask } from './tasks.model';
import { AuthService } from 'src/app/auth/auth.service';

import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // tslint:disable-next-line: variable-name
  private _alltasks = new BehaviorSubject<Alltask[]>([
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
  ]);

  // tslint:disable-next-line: variable-name
  private _completedtasks = new BehaviorSubject<Completedtask[]>([
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
  ]);

  // tslint:disable-next-line: variable-name
  private _flags = new BehaviorSubject<Flag[]>([
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
  ]);

  // tslint:disable-next-line: variable-name
  private _overdues = new BehaviorSubject<Overdue[]>([
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
  ]);

  get alltasks() {
    return this._alltasks.asObservable();
  }
  get completedtasks() {
    return this._completedtasks.asObservable();
  }
  get overdues() {
    return this._overdues.asObservable();
  }
  get flags() {
    return this._flags.asObservable();
  }

  getAlltask(id: string) {
    return this.alltasks.pipe(take(1),
      map(alltasks => {
        return { ...alltasks.find(at => at.id === id) };
      })
    );
  }

  addAlltask(title: string, duedate: Date, modul: string, description: string) {
    const newAlltask = new Alltask(
      Math.random().toString(),
      title,
      duedate,
      modul,
      description,
      this.authService.userId
    );
    this.alltasks.pipe(take(1)).subscribe(alltasks => {
      this._alltasks.next(alltasks.concat(newAlltask));
    });
  }

  getCompletedtask(id: string) {
    return this.completedtasks.pipe(take(1),
      map(completedtasks => {
        return { ...completedtasks.find(ct => ct.id === id) };
      })
    );
  }

  addCompletedtask(title: string, duedate: Date, modul: string, description: string) {
    const newCompletedtask = new Completedtask(
      Math.random().toString(),
      title,
      duedate,
      modul,
      description,
      this.authService.userId
    );
    this.completedtasks.pipe(take(1)).subscribe(completedtasks => {
      this._completedtasks.next(completedtasks.concat(newCompletedtask));
    });
  }

  getOverdue(id: string) {
    return this.overdues.pipe(take(1),
      map(overdues => {
        return { ...overdues.find(ov => ov.id === id) };
      })
    );
  }

  addOverdue(title: string, duedate: Date, modul: string, description: string) {
    const newOverdue = new Overdue(
      Math.random().toString(),
      title,
      duedate,
      modul,
      description,
      this.authService.userId
    );
    this.overdues.pipe(take(1)).subscribe(overdues => {
      this._overdues.next(overdues.concat(newOverdue));
    });
  }

  getFlag(id: string) {
    return this.flags.pipe(take(1),
      map(flags => {
        return { ...flags.find(fl => fl.id === id) };
      })
    );
  }

  addFlag(title: string, duedate: Date, modul: string, description: string) {
    const newFlag = new Flag(
      Math.random().toString(),
      title,
      duedate,
      modul,
      description,
      this.authService.userId
    );
    this.flags.pipe(take(1)).subscribe(flags => {
      this._flags.next(flags.concat(newFlag));
    });
  }

  constructor(private authService: AuthService) { }


}
