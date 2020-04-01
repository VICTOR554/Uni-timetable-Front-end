import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Note, Module } from './notes.model';
import { NotesService } from './notes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {
  loadednotes: Note[];
  loadedmodules: Module[];
  private noteSub: Subscription;
  selectedPath = '/home/tabs/notes';
  counter = 0;
  nonotes;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private loadingCtrl: LoadingController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url !== undefined && event instanceof NavigationEnd) {
        if (event.url === this.selectedPath && this.counter !== 0) {
          this.update();
          console.log('refreshed page');
          console.log('counter = ', this.counter);
        }
        this.counter = this.counter + 1;
      }

    });
  }

  ngOnInit() {
    console.log('hi');
    this.getNotes();
  }

  update() {
    this.getNotes();
  }

  getNotes() {
    this.loadingCtrl.create({ message: 'Loading Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.noteSub = this.notesService.getAllNotes().subscribe((notes: any) => {
          this.loadednotes = notes;
          console.log(notes);

          this.loadedmodules = [];
          // checks the module code and calls getmodule to get module name
          notes.forEach(element => {
            if (element.module_code) {
              this.getModule(element.module_code);
            } else {

              this.getModule('no module');
            }
          });

          if (notes.length === 0) {
            this.nonotes = true;
          } else {
            this.nonotes = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

  // gets module name
  getModule(ModuleCode) {
    if (ModuleCode === 'no module') {
      this.loadedmodules.push({
        name: 'no module',
        code: 'no module',
        course_id: 0
      });

    } else {
      this.noteSub = this.notesService.GetModule(ModuleCode).subscribe((module: any) => {
        this.loadedmodules.push(module);
        console.log('Module Code', ModuleCode);
        console.log('Module', module);
        console.log('modules for the week', this.loadedmodules);
      });
    }


  }

  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.loadingCtrl.create({ message: 'Deleting Note...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notesService.deleteNote(noteId).subscribe(() => {
          this.update();
        });
        setTimeout(() => {
          loadingEl.dismiss();
          console.log('delete item', noteId);
        }, 1000);
      });
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

}
