import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Class } from '../../home.model';
import { Subscription } from 'rxjs';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  loadedclass: Class[];
  private detailSub: Subscription;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.loadedclass = this.homeService.classes;
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
}
