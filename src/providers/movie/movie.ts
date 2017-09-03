import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath: string = 'https://api.themoviedb.org/3'

  private apiKey: string = '8db959c4f50a497c6bfb08554e8cfdd4'

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider')
  }

  public getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key=' + this.apiKey)
  }

}
