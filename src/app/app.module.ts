import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GreetingsListComponent } from './greetings-list/greetings-list.component';
import { GreetingFormComponent } from './greeting-form/greeting-form.component';
import { GreetingService } from '../services/greeting-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsListComponent,
    GreetingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }