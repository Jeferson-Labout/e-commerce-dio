import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksSevice {
  private url = `${environment.baseURL}/product`
  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) {


  }

  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)

  }
}
