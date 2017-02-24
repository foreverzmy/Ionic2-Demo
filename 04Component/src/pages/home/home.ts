import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewPipe } from '../../pipes/new-pipe'
import { SecondPage } from '../second/second'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openModel() {
    this.navCtrl.push(SecondPage, {
      name: 'forever',
      job: '码农'
    })
  }

}
