import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-component-library',
  template: `
    <p>
      my-component-library works!
    </p>
  `,
  styles: []
})
export class MyComponentLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
