import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCardComponent } from './new-card/new-card';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewCardComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    NewCardComponent
  ]
})
export class ComponentsModule {

}
