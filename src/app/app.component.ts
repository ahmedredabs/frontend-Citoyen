import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Citizen} from '../model/citizen';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

// Plan: Have the QR scanner and the authentification UC all in one screen. QR scanner is a separate component.
export class AppComponent implements OnInit {
  title = 'app-citoyen';
  citizen : Citizen = new Citizen();

  constructor(private service : ApiService) {}

  ngOnInit() {
    this.service.registerCitizen().subscribe(data => {
      this.citizen = data;
      console.log(data);
    });
  }
}
