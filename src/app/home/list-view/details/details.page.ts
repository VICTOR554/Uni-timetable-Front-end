import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ListService } from '../list.service';
import { Class } from '../list.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {

  form: FormGroup;
  loadedclass: Class[];
  private detailSub: Subscription;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.detailSub = this.listService.classes.subscribe(classes => {
      this.loadedclass = classes;
    });
    this.form = new FormGroup({
      module: new FormControl(null, {
        updateOn: 'blur',
        // validators: [Validators.required],
      }),
      week: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  submit() {
    console.log(this.form);
    this.router.navigate(['home/tabs/list-view']);
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.detailSub) {
      this.detailSub.unsubscribe();
    }
  }
}
