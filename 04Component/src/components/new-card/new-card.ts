import { Component } from '@angular/core';
import { NewProvider } from '../../providers/new-provider'
/*
  Generated class for the NewCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'new-card',
  templateUrl: 'new-card.html',
  providers: [NewProvider]
})
export class NewCardComponent {

  text: string;

  constructor(public newProvider: NewProvider) {
    this.text = 'Hello';
    this.newProvider.load().then((data) => {
      console.log(data);
    })
  }
  openModel() {

  }
}
