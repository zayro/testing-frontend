import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {

  let injector: TestBed;
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    injector = getTestBed();
    service = injector.get(HttpService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUsers = [
        { login: 'John' },
        { login: 'Doe' }
      ];

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`${service.url}/`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUsers);
    });

  });

  describe('Get', () => {
    it('should get users', () => {

      const mockUsers = [
        { name: 'Bob', website: 'www.yessss.com' },
        { name: 'Juliette', website: 'nope.com' }
      ];

      service.getData().subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockUsers);
        }
      });

      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);

      httpMock.verify();
    });


  });

});
