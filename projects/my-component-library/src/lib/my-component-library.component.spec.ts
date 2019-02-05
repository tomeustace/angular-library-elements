import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentLibraryComponent } from './my-component-library.component';

describe('MyComponentLibraryComponent', () => {
  let component: MyComponentLibraryComponent;
  let fixture: ComponentFixture<MyComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
