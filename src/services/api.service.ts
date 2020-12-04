import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Citizen} from '../model/citizen';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  private readonly apiUrl : string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.domain;
  }

  public registerCitizen() {
    return this.http.get<Citizen>(this.apiUrl+"/citizen/register");
  }
}
