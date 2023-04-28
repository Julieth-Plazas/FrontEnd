/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutenticarService } from './autenticar.service';

describe('Service: Autenticar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticarService]
    });
  });

  it('should ...', inject([AutenticarService], (service: AutenticarService) => {
    expect(service).toBeTruthy();
  }));
});
