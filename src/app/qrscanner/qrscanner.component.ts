import { Component, OnInit } from '@angular/core';
import { Scan } from 'src/model/scan';
import { ApiService } from 'src/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Qrcode } from 'src/model/qrcode';
import { Citizen } from 'src/model/citizen';
import { LocaldatabaseService } from 'src/services/localdatabase.service';
import { Phyisician } from 'src/model/physician';
import { Location } from 'src/model/location';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.sass']
})
export class QrscannerComponent implements OnInit {

  citizen : Citizen;
  scan : Scan;
  qrcode: Qrcode;
  physician: Phyisician;
  location: Location;
  scannerEnabled = true;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService : ApiService,
    private database : LocaldatabaseService) {
    this.scan = new Scan();
    this.qrcode = new Qrcode();
    this.physician= new Phyisician();
    this.location= new Location();
    this.citizen = new Citizen();
    console.log('citizen is ',this.citizen);
  }

  ngOnInit(): void {
  }

  public onCodeResult(resultString: string) {
    var isVisitScan=false;
    this.qrcode.id = resultString.split('\n')[3];
    if(resultString.split('\n')[0]==="PhysicianID"){
      this.physician.id= resultString.split('\n')[1];
      this.qrcode.physician = this.physician;
      isVisitScan=false;
    }
    if(resultString.split('\n')[0]==="LocationID"){
      this.location.id =resultString.split('\n')[1];
      this.qrcode.location = this.location;
      isVisitScan=true;
    }
    this.scan.qrCode = this.qrcode;
    this.scannerEnabled = false;
    this.database.getCitizen()
    .then((data : Citizen[]) => {
      this.scan.citizen.id = data[0].id;
      if(isVisitScan){
        this.apiService.visitScan(this.scan).subscribe();
      }else{
        this.apiService.alertScan(this.scan).subscribe();
      }
    });
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }

}
