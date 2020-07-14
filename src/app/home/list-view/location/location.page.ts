import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Locations } from '../list.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, OnDestroy {

  selectedLocationImage: string;
  loadedLocation: Locations;
  private listSub: Subscription;
  currentLocation;


  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController, ) { }

  ngOnInit() {
    this.loadingCtrl.create({ message: 'Loading Location...' })
      .then(loadingEl => {
        loadingEl.present();
        // Subscribe to changes in route params
        this.route.paramMap.subscribe(paramMap => {
          if (!paramMap.has('activitylocation')) {
            this.navCtrl.navigateBack('/home/tabs/list-view'); 
            return;
          }
          console.log('param', paramMap);
          console.log('id', paramMap.get('activitylocation'));

          this.currentLocation = paramMap.get('activitylocation').split(' ')[0];

          this.listSub = this.listService.getLocation(this.currentLocation).subscribe((location: any) => {
            this.loadedLocation = location;
            console.log('day', this.loadedLocation);
            console.log('day', this.currentLocation);
            this.selectedLocationImage = this.getMapImage(location.lat, location.lng, 18);

          });
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });

  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=1080x1920&maptype=roadmap
    &markers=color:red%7Clabel:Location%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }


}
