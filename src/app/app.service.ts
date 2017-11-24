import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private url: string = 'https://api.github.com/search/repositories?q=';
  results: Object[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }
  getData(term: String) {

    let api = `${this.url}${term}`;
    return this.http.get(api).map(res => {
      let results = res.json();
      return results;
    })
  }
  repo(term: String){
    let api = `https://api.github.com/search/users?q=${term}`;
    return this.http.get(api).map(res => {
      let results = res.json();
      return results;
    })
  }
}
