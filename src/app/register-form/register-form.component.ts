import { Component, OnInit } from '@angular/core';
import {Citizen} from '../../model/citizen';
import { ApiService } from '../../services/api.service';
import {LocaldatabaseService} from 'src/services/localdatabase.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  citizen : Citizen;

  constructor(private service : ApiService, private database : LocaldatabaseService, private route: ActivatedRoute, private router: Router) {
    this.citizen = new Citizen()
  }

  ngOnInit(): void {
    this.database.getCitizen()
      .then((data : Citizen[]) => {
        if(data.length !== 0) {
          this.router.navigate(['/qrscanner']);
        }
      })
  }

  onSubmit() {
    console.log(this.citizen);
    this.service.registerCitizen(this.citizen).subscribe(data => {
      this.citizen = data;
      this.database.saveCitizen(this.citizen)
    });
    this.router.navigate(['/qrscanner']);
  }
}
