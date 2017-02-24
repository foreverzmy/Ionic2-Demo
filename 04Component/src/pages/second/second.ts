import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {
  myName: string = null;
  myJob: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myName = navParams.get('name');
    this.myJob = navParams.get('job')
  }

  ionViewDidLoad() {
  }
  backToPage() {
    this.navCtrl.pop();
  }
}
