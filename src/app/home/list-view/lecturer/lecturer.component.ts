import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.scss'],
})
export class LecturerComponent implements OnInit {

  lecturer;
  firstName;
  lastName;



  constructor(public navParams: NavParams) {
    console.log(this.navParams.data);
    this.lecturer = this.navParams.get('key1');
    this.firstName = this.lecturer.split(' ')[0];
    this.lastName = this.lecturer.split(' ')[1];
    console.log(this.firstName , this.lastName);
  }


  ngOnInit() {}



}
