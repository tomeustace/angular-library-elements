import { Component, OnInit } from '@angular/core';
import { MyLibraryService } from './my-library.service';

@Component({
  selector: 'lib-my-library',
  template: `
    <p>
      my-library works!
    </p>
    <button (click)="makeRequest()">click</button>
  `,
  styles: [],
  providers: [MyLibraryService]
})
export class MyLibraryComponent implements OnInit {

  constructor(private myLibraryService: MyLibraryService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.myLibraryService.makeRequest();
  }

}
