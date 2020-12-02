import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenAuthComponent } from './citizen-auth.component';

describe('CitizenAuthComponent', () => {
  let component: CitizenAuthComponent;
  let fixture: ComponentFixture<CitizenAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
