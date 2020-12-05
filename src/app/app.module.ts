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
import { QrscannerComponent } from './qrscanner/qrscanner.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    QrscannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService,LocaldatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
