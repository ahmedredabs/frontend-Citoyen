import { Component, OnInit } from '@angular/core';
import { Scan } from 'src/model/scan';
import { BarcodeFormat } from '@zxing/library';
import { ApiService } from 'src/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Qrcode } from 'src/model/qrcode';
import { Citizen } from 'src/model/citizen';
import { LocaldatabaseService } from 'src/services/localdatabase.service';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.sass']
})
export class QrscannerComponent implements OnInit {

  scan : Scan;
  qrcode: Qrcode;
  allowedFormats = [ BarcodeFormat.QR_CODE ];
  scannerEnabled = true;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService : ApiService,
    private database : LocaldatabaseService) { 
    this.scan = new Scan();    
    this.qrcode = new Qrcode();
    this.database.getCitizen()
    .then((data : Citizen[]) => {
      console.log(data[0]);
      this.scan.citizen = data[0];
    });
  }

  ngOnInit(): void {
  }

  public onCodeResult(resultString: string) {
    console.log(resultString);
    this.qrcode.id = resultString.split('\n')[0];
    console.log(this.qrcode);
    this.scan.qrCode = this.qrcode;
    this.scannerEnabled = false;
    this.apiService.scannerQrCode(this.scan).subscribe();
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }

}
