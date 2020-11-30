import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Greeting } from '../model/greetings';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GreetingService {

  private greetingsUrl: string;

  constructor(private http: HttpClient) {
    this.greetingsUrl = 'http://localhost:8080/greetings';
  }

  public findAll(): Observable<Greeting[]> {
    return this.http.get<Greeting[]>(this.greetingsUrl);
  }

  public save(greeting: Greeting) {
    return this.http.post<Greeting>(this.greetingsUrl, greeting);
  }
}