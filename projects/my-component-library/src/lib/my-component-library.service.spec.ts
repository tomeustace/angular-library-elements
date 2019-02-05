import { TestBed, inject } from '@angular/core/testing';

import { MyComponentLibraryService } from './my-component-library.service';

describe('MyComponentLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyComponentLibraryService]
    });
  });

  it('should be created', inject([MyComponentLibraryService], (service: MyComponentLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
