import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetsPage } from '../action-sheets/action-sheets'
import { AlertsPage } from '../alerts/alerts'
import { BadgesPage } from '../badges/badges'
import { CardPage } from '../card/card'
import { CheckboxPage } from '../checkbox/checkbox'
import { DateTimePage } from '../date-time/date-time'
import { LabelPage } from '../label/label'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{ name: string, path: Object }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [{
      name: 'ActionSheets',
      path: ActionSheetsPage
    }, {
      name: 'Alerts',
      path: AlertsPage
    }, {
      name: 'Badges',
      path: BadgesPage
    }, {
      name: 'CardPage',
      path: CardPage
    }, {
      name: 'CheckboxPage',
      path: CheckboxPage
    }, {
      name: 'DateTimePage',
      path: DateTimePage
    }, {
      name: 'LabelPage',
      path: LabelPage
    }]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.path);
  }
}
