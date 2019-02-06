import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyLibraryService {

  constructor(private http: HttpClient) { }

  makeRequest() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    this.http.get(url).subscribe(res => {
      console.log('result', res);
    });
  }
}
