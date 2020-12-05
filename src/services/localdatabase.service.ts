import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import {Citizen} from '../model/citizen';

@Injectable()
export class LocaldatabaseService {

  private db : any;

  constructor() {
    this.db = new Dexie('citizen-db');

    this.db.version(1).stores({
        citizen: "id, alerted, name"
    });
  }

  /*
  public getCitizen() : Citizen {

  }
  */

  public saveCitizen(citizen : Citizen) {
    this.db.citizen
      .add(citizen)
      .then( async () => {
        const citizen : Citizen[] = await this.db.citizen.toArray();
        console.log('Citizen DB is now ', citizen);

      })
  }
}
