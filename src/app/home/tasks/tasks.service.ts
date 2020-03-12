import { Injectable } from '@angular/core';
import { Overdue, Flag, Completedtask, Alltask } from './tasks.model';
import { AuthService } from 'src/app/auth/auth.service';

import { take, map, delay, tap } from 'rxjs/operators';
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
      'HCI',
      new Date('2019-02-12'),
      'Study the new article of advanced AI',
      'abc'


    ),
    new Alltask(
      'AT2',
      'Check if code smell',
      'Software Engineering',
      new Date('2020-02-18'),
      'Study the the lecture on code smells',
      'abc'

    ),
    new Alltask(
      'AT3',
      'Research Call of duty',
      'Games and Design',
      new Date('2020-02-20'),
      'Design Call of duty main frame',
      'abc'

    ),
    new Alltask(
      'AT4',
      'Study cloud service',
      'Advanced Topics',
      new Date('2020-02-24'),
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Alltask(
      'AT5',
      'Build firewall',
      'Cyber Security',
      new Date('2020-02-26'),
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ]);

  // tslint:disable-next-line: variable-name
  private _completedtasks = new BehaviorSubject<Completedtask[]>([
    new Completedtask(
      'CT1',
      'Study Irobot movie analysis',
      'HCI',
      new Date('2019-02-12'),
      'Study the new article of advanced AI',
      'abc'


    ),
    new Completedtask(
      'CT2',
      'Does code rot',
      'Software Engineering',
      new Date('2020-02-18'),
      'Study the the lecture on code smells',
      'abc'

    ),
    new Completedtask(
      'CT3',
      'Create simulation',
      'Games and Design',
      new Date('2020-02-20'),
      'Design Call of duty main frame',
      'abc'

    ),
    new Completedtask(
      'CT4',
      'Build better cloud service',
      'Advanced Topics',
      new Date('2020-02-24'),
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Completedtask(
      'CT5',
      'Stop virus from going',
      'Cyber Security',
      new Date('2020-02-26'),
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ]);

  // tslint:disable-next-line: variable-name
  private _flags = new BehaviorSubject<Flag[]>([
    new Flag(
      'FT1',
      'Stop Ultron',
      'HCI',
      new Date('2019-02-12'),
      'Study the new article of advanced AI',
      'abc'


    ),
    new Flag(
      'FT2',
      'Learn how to create the matrix',
      'Software Engineering',
      new Date('2020-02-18'),
      'Study the the lecture on code smells',
      'abc'

    ),
    new Flag(
      'FT3',
      'Build Virtual Reality device',
      'Games and Design',
      new Date('2020-02-20'),
      'Design Call of duty main frame',
      'abc'

    ),
    new Flag(
      'FT4',
      'Study dissertation write up',
      'Advanced Topics',
      new Date('2020-02-24'),
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Flag(
      'FT5',
      'Solve np vs npm',
      'Cyber Security',
      new Date('2020-02-26'),
      'Build a firewall to stop the self replecating virus',
      'abc'

    )
  ]);

  // tslint:disable-next-line: variable-name
  private _overdues = new BehaviorSubject<Overdue[]>([
    new Overdue(
      'OT1',
      'Build sentien life',
      'HCI',
      new Date('2019-02-12'),
      'Study the new article of advanced AI',
      'abc'


    ),
    new Overdue(
      'OT2',
      'Check if code smell',
      'Software Engineering',
      new Date('2020-02-18'),
      'Study the the lecture on code smells',
      'abc'

    ),
    new Overdue(
      'OT3',
      'Research Call of duty',
      'Games and Design',
      new Date('2020-02-20'),
      'Design Call of duty main frame',
      'abc'

    ),
    new Overdue(
      'OT4',
      'Study cloud service',
      'Advanced Topics',
      new Date('2020-02-24'),
      'Study how is cloud service advancing to the new age',
      'abc'

    ),
    new Overdue(
      'OT5',
      'Build firewall',
      'Cyber Security',
      new Date('2020-02-26'),
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

  constructor(private authService: AuthService) { }


  // ALL TASK

  getAlltask(id: string) {
    return this.alltasks.pipe(take(1),
      map(alltasks => {
        return { ...alltasks.find(at => at.id === id) };
      })
    );
  }

  addAlltask(title: string, modul: string, duedate: Date, description: string) {
    const newAlltask = new Alltask(
      Math.random().toString(),
      title,
      modul,
      duedate,
      description,
      this.authService.userId
    );
    return this.alltasks.pipe(take(1), delay(1000), tap(alltasks => {
      this._alltasks.next(alltasks.concat(newAlltask));
    })
    );
  }

  updateAlltask(alltaskId: string, title: string, modul: string, duedate: Date, description: string) {
    return this.alltasks.pipe(
      take(1),
      delay(1000),
      tap(alltasks => {
        const updatedAlltaskIndex = alltasks.findIndex(at => at.id === alltaskId);
        const updatedAlltasks = [...alltasks];
        const oldAlltask = updatedAlltasks[updatedAlltaskIndex];
        updatedAlltasks[updatedAlltaskIndex] = new Alltask(
          oldAlltask.id,
          title,
          modul,
          duedate,
          description,
          oldAlltask.userId
        );
        this._alltasks.next(updatedAlltasks);
      })
    );
  }

  cancelAlltask(alltaskId: string) {
    return this.alltasks.pipe(
      take(1),
      delay(1000),
      tap(alltasks => {
        this._alltasks.next(alltasks.filter(at => at.id !== alltaskId));
      })
    );
  }



  // Completed Task

  getCompletedtask(id: string) {
    return this.completedtasks.pipe(take(1),
      map(completedtasks => {
        return { ...completedtasks.find(ct => ct.id === id) };
      })
    );
  }

  addCompletedtask(title: string, modul: string, duedate: Date, description: string) {
    const newCompletedtask = new Completedtask(
      Math.random().toString(),
      title,
      modul,
      duedate,
      description,
      this.authService.userId
    );
    return this.completedtasks.pipe(take(1), delay(1000), tap(completedtasks => {
      this._completedtasks.next(completedtasks.concat(newCompletedtask));
    })
    );
  }

  updateCompletedtask(completedtaskId: string, title: string, modul: string, duedate: Date, description: string) {
    return this.completedtasks.pipe(
      take(1),
      delay(1000),
      tap(completedtasks => {
        const updatedCompletedtaskIndex = completedtasks.findIndex(ct => ct.id === completedtaskId);
        const updatedCompletedtasks = [...completedtasks];
        const oldCompletedtask = updatedCompletedtasks[updatedCompletedtaskIndex];
        updatedCompletedtasks[updatedCompletedtaskIndex] = new Completedtask(
          oldCompletedtask.id,
          title,
          modul,
          duedate,
          description,
          oldCompletedtask.userId
        );
        this._completedtasks.next(updatedCompletedtasks);
      })
    );
  }

  cancelCompletedtask(completedtaskId: string) {
    return this.completedtasks.pipe(
      take(1),
      delay(1000),
      tap(completedtasks => {
        this._completedtasks.next(completedtasks.filter(ct => ct.id !== completedtaskId));
      })
    );
  }

  // Overdue Task

  getOverdue(id: string) {
    return this.overdues.pipe(take(1),
      map(overdues => {
        return { ...overdues.find(ov => ov.id === id) };
      })
    );
  }

  addOverdue(title: string, modul: string, duedate: Date, description: string) {
    const newOverdue = new Overdue(
      Math.random().toString(),
      title,
      modul,
      duedate,
      description,
      this.authService.userId
    );
    return this.overdues.pipe(take(1), delay(1000), tap(overdues => {
      this._overdues.next(overdues.concat(newOverdue));
    })
    );
  }

  updateOverdue(overdueId: string, title: string, modul: string, duedate: Date, description: string) {
    return this.overdues.pipe(
      take(1),
      delay(1000),
      tap(overdues => {
        const updatedOverdueIndex = overdues.findIndex(ov => ov.id === overdueId);
        const updatedOverdues = [...overdues];
        const oldOverdue = updatedOverdues[updatedOverdueIndex];
        updatedOverdues[updatedOverdueIndex] = new Overdue(
          oldOverdue.id,
          title,
          modul,
          duedate,
          description,
          oldOverdue.userId
        );
        this._overdues.next(updatedOverdues);
      })
    );
  }

  cancelOverdue(overdueId: string) {
    return this.overdues.pipe(
      take(1),
      delay(1000),
      tap(overdues => {
        this._overdues.next(overdues.filter(ov => ov.id !== overdueId));
      })
    );
  }

  // Flag

  getFlag(id: string) {
    return this.flags.pipe(take(1),
      map(flags => {
        return { ...flags.find(fl => fl.id === id) };
      })
    );
  }

  addFlag(title: string, modul: string, duedate: Date, description: string) {
    const newFlag = new Flag(
      Math.random().toString(),
      title,
      modul,
      duedate,
      description,
      this.authService.userId
    );
    return this.flags.pipe(take(1), delay(1000), tap(flags => {
      this._flags.next(flags.concat(newFlag));
    })
    );
  }

  updateFlag(flagId: string, title: string, modul: string, duedate: Date, description: string) {
    return this.flags.pipe(
      take(1),
      delay(1000),
      tap(flags => {
        const updatedFlagIndex = flags.findIndex(fl => fl.id === flagId);
        const updatedFlags = [...flags];
        const oldOverdue = updatedFlags[updatedFlagIndex];
        updatedFlags[updatedFlagIndex] = new Flag(
          oldOverdue.id,
          title,
          modul,
          duedate,
          description,
          oldOverdue.userId
        );
        this._flags.next(updatedFlags);
      })
    );
  }

  cancelFlag(flagId: string) {
    return this.flags.pipe(
      take(1),
      delay(1000),
      tap(flags => {
        this._flags.next(flags.filter(fl => fl.id !== flagId));
      })
    );
  }



}
