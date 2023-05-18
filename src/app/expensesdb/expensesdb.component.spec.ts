import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesDBComponent } from './expensesdb.component';

describe('ExpensesDBComponent', () => {
  let component: ExpensesDBComponent;
  let fixture: ComponentFixture<ExpensesDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
