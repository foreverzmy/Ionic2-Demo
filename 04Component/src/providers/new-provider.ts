import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewProvider {
  data: any = null;

  constructor(public http: Http) {
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resove => {
      this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resove(this.data)
        })
    })
  }

}
