import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ HttpClientModule ],
  declarations: [MyLibraryComponent],
  exports: [MyLibraryComponent]
})
export class MyLibraryModule { }
