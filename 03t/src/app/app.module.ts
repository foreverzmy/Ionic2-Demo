import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets'
import { AlertsPage } from '../pages/alerts/alerts'
import { BadgesPage } from '../pages/badges/badges'
import { CardPage } from '../pages/card/card'
import { CheckboxPage } from '../pages/checkbox/checkbox'
import { DateTimePage } from '../pages/date-time/date-time'
import { LabelPage } from '../pages/label/label'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    LabelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    LabelPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
