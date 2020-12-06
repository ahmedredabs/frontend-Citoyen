import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Citizen} from '../model/citizen';
import { environment } from '../environments/environment';
import { Scan } from 'src/model/scan';

@Injectable()
export class ApiService {

  private readonly apiUrl : string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.domain;
  }

  public registerCitizen(citizen : Citizen) {
    return this.http.post<Citizen>(this.apiUrl+"/citizen/register", citizen);
  }

  public scannerQrCode(scan : Scan) {
    console.log(scan);
    return this.http.post<Scan>(this.apiUrl+"/scan/scanner", scan);
  }
}
