import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaveOptionService {

  constructor(private http: Http) { }

  addOptions(capab) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4200', capab, {headers: headers}).pipe(map(res=> res.json()));

  }
}
