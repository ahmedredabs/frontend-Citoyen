import { Component, OnInit } from '@angular/core';
import {Citizen} from '../../model/citizen';
import { ApiService } from '../../services/api.service';
import {LocaldatabaseService} from 'src/services/localdatabase.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  citizen : Citizen;

  constructor(private service : ApiService, private database : LocaldatabaseService) {
    this.citizen = new Citizen()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.citizen);
    this.service.registerCitizen(this.citizen).subscribe(data => {
      this.citizen = data;
      console.log(data);
      this.database.saveCitizen(this.citizen)
    });
  }
}
