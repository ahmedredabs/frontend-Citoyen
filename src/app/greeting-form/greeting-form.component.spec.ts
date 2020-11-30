import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingFormComponent } from './greeting-form.component';

describe('GreetingFormComponent', () => {
  let component: GreetingFormComponent;
  let fixture: ComponentFixture<GreetingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
