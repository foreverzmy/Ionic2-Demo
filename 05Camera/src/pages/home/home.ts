import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images: string;
  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform = platform;
  }
  takePic() {
    this.platform.ready().then(() => {
      let option = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false
      };
      Camera.getPicture(option).then((data: any) => {
        let base64Image = "data:image/jpeg;base64," + data;
        this.images = base64Image;
      }, err => { })
    })
  }

}
