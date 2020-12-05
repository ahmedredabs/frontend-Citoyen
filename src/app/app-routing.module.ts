import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { QrscannerComponent } from './qrscanner/qrscanner.component'

const routes: Routes = [
  {path: '', component: RegisterFormComponent},
  {path: 'qrscanner', component: QrscannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
