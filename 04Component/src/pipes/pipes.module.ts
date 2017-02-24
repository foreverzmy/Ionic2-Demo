import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { NewPipe } from './new-pipe'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    NewPipe
  ],
  declarations: [
  ],
  providers: [],
  exports: [
    CommonModule
  ]
})
export class PipsModule {

}
