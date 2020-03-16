import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  Login(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return;
    }
    const studentid = form.value.studentid;
    const password = form.value.password;

    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'logging in.....' })
      .then(loadingEl => {
        loadingEl.present();

        let authObs: Observable<AuthResponseData>;
        authObs = this.authService.login(studentid, password);

        authObs.subscribe(
          res => {
            console.log(res);

            if (res.token) {
              this.isLoading = false;
              loadingEl.dismiss();
              this.router.navigateByUrl('/home/tabs/list-view');
              this.authService.token(studentid, password);
              this.authService.loggedin();
              form.reset();
            } else {
              this.isLoading = false;
              loadingEl.dismiss();
              console.log('wrong username or password');
              this.showAlert('wrong username or password');
            }
          },

        );
      });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

  // onSubmit() {
  //   if (!form.valid) {
  //     return;
  //   }
  //   const studentid = form.value.studentid;
  //   const password = form.value.password;

  //   this.Login(studentid, password);
  // }



}
