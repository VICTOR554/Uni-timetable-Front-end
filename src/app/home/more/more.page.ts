import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogout() {
    this.loadingCtrl.create({ message: 'Logging Out...' })
      .then(loadingEl => {
        loadingEl.present();
        this.authService.logout();
        this.router.navigateByUrl('/auth');
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
  }

}
