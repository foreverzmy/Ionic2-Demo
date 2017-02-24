import {
  Pipe
} from '@angular/core';
import {
  PipeTransform
} from '@angular/core';

/*
  Generated class for the NewPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'newPipe'
})

export class NewPipe implements PipeTransform {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + ''; // make sure it's a string
    return value.toUpperCase() + ' WORLD';
  }
}
