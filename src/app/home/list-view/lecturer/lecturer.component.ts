import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.scss'],
})
export class LecturerComponent implements OnInit {

  lecturer;
  firstname;
  lastname;



  constructor(public navParams: NavParams) {
    console.log(this.navParams.data);
    this.lecturer = this.navParams.get('key1');
    this.firstname = this.lecturer.split(' ')[0];
    this.lastname = this.lecturer.split(' ')[1];
    // console.log(this.firstname , this.lastname);
  }


  ngOnInit() {}



}
