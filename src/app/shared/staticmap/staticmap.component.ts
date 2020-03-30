import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-staticmap',
  templateUrl: './staticmap.component.html',
  styleUrls: ['./staticmap.component.scss'],
})
export class StaticmapComponent implements OnInit {

  selectedLocationImage: string;
  isLoading = false;

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {
    this.selectedLocationImage = this.getMapImage(51.53311, -0.474027, 17);
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Location%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }


}
