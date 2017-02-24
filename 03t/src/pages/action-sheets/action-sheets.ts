import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
/*
  Generated class for the ActionSheets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html'
})
export class ActionSheetsPage {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}