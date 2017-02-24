import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { NewPipe } from '../pipes/new-pipe'

@NgModule({
  declarations: [
    MyApp,
    NewPipe,
    HomePage,
    SecondPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
})
export class AppModule { }
