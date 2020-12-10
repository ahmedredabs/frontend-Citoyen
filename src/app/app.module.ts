import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ApiService } from '../services/api.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import {LocaldatabaseService} from 'src/services/localdatabase.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyBM3rPio9nGwkn939oHmVfwc_bT3xNjq5Q",
  authDomain: "notifpfe.firebaseapp.com",
  projectId: "notifpfe",
  storageBucket: "notifpfe.appspot.com",
  messagingSenderId: "989566188518",
  appId: "1:989566188518:web:2a7fa820a4d43c48613427"
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    QrscannerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireMessagingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService,LocaldatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
