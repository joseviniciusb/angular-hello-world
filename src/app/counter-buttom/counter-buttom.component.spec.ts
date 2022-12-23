import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtomComponent } from './counter-buttom.component';

describe('CounterButtomComponent', () => {
  let component: CounterButtomComponent;
  let fixture: ComponentFixture<CounterButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
