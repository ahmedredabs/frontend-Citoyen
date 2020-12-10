import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Citizen} from '../model/citizen';
import { AngularFireMessaging } from '@angular/fire/messaging';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

// Plan: Have the QR scanner and the authentification UC all in one screen. QR scanner is a separate component.
export class AppComponent implements OnInit {
  title = 'BlockCovid';
  citizen : Citizen = new Citizen();

  constructor(private service : ApiService, private afMessaging: AngularFireMessaging) {
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },  
      );
  }

  ngOnInit() {
    // We will be coming back to this later.
    /*
    this.service.registerCitizen().subscribe(data => {
      this.citizen = data;
      console.log(data);
    });
    */
  }
}
