import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GreetingService } from '../../services/greeting-service.service';
import { Greeting } from '../../model/greetings';

@Component({
  selector: 'app-greeting-form',
  templateUrl: './greeting-form.component.html',
  styleUrls: ['./greeting-form.component.sass']
})
export class GreetingFormComponent {

  greeting: Greeting;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private greetingService: GreetingService) {
    this.greeting = new Greeting();
  }

  onSubmit() {
    this.greetingService.save(this.greeting).subscribe(result => this.gotogreetingList());
  }

  gotogreetingList() {
    this.router.navigate(['/greetings']);
  }
}