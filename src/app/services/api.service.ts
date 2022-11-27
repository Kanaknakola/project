import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User1 } from '../models/User1';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:4200/user1';

  constructor(private httpClient: HttpClient) { }


  getUser1(): Observable<User1[]> {
    return this.httpClient.get<User1[]>(this.url);
  }

}
