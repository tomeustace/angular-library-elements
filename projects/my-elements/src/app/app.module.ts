import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MyLibraryComponent } from 'projects/my-library/src/lib/my-library.component';
import { MyLibraryModule } from 'projects/my-library/src/lib/my-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyLibraryModule
  ],
  providers: [],
  entryComponents: [AppComponent, MyLibraryComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const libraryEl = createCustomElement(MyLibraryComponent, { injector: this.injector });
    customElements.define('my-custom-element', libraryEl);
  }
}