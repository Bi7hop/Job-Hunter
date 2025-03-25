import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryComparisonComponent } from './salary-comparison.component';

describe('SalaryComparisonComponent', () => {
  let component: SalaryComparisonComponent;
  let fixture: ComponentFixture<SalaryComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaryComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
