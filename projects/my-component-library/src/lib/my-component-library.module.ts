import { NgModule } from '@angular/core';
import { MyComponentLibraryComponent } from './my-component-library.component';

@NgModule({
  imports: [
  ],
  declarations: [MyComponentLibraryComponent],
  exports: [MyComponentLibraryComponent]
})
export class MyComponentLibraryModule { }
