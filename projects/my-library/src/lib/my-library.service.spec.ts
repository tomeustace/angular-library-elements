import { TestBed, inject } from '@angular/core/testing';

import { MyLibraryService } from './my-library.service';

describe('MyComponentLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLibraryService]
    });
  });

  it('should be created', inject([MyLibraryService], (service: MyLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
