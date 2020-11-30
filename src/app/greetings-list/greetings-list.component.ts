import { Component, OnInit } from '@angular/core';
import { Greeting } from '../../model/greetings';
import { GreetingService } from '../../services/greeting-service.service';

@Component({
  selector: 'app-greetings-list',
  templateUrl: './greetings-list.component.html',
  styleUrls: ['./greetings-list.component.sass']
})
export class GreetingsListComponent implements OnInit {

  greetings: Greeting[] = [new Greeting()];

  constructor(private greetingService: GreetingService) {
  }

  ngOnInit() {
    this.greetingService.findAll().subscribe(data => {
      this.greetings = data;
    });
  }
}