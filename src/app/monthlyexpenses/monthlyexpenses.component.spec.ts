import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexpensesComponent } from './monthlyexpenses.component';

describe('MonthlyexpensesComponent', () => {
  let component: MonthlyexpensesComponent;
  let fixture: ComponentFixture<MonthlyexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
