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

  onLogin(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return;
    }
    const studentId = form.value.studentId;
    const password = form.value.password;
    console.log('User Input: ' + studentId + ', ' + password);

    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'logging in.....' })
      .then(loadingEl => {
        loadingEl.present();

        let authObs: Observable<AuthResponseData>;
        authObs = this.authService.token(studentId, password);

        authObs.subscribe(
          res => {
            console.log('Token: ' + res.token);

            if (res.token) {
              this.isLoading = false;
              this.authService.httpHeaderAuthorization(res.token);
              this.authService.login();
              loadingEl.dismiss();
              this.router.navigateByUrl('/home/tabs/list-view');
              form.reset();

            } else {
              this.isLoading = false;
              loadingEl.dismiss();
              this.showAlert(res.text);
              console.log('Reason for no entry:' + res.text);
            }
          },
        );
      });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
}
