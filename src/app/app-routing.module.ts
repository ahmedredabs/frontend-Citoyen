import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingsListComponent } from './greetings-list/greetings-list.component';
import { GreetingFormComponent } from './greeting-form/greeting-form.component';
import { CitizenAuthComponent } from './citizen-auth/citizen-auth.component';

const routes: Routes = [
  { path: 'greetings', component: GreetingsListComponent },
  { path: 'addgreeting', component: GreetingFormComponent },
  { path: '', component: CitizenAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
