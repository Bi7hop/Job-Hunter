import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDashboardComponent } from './analysis-dashboard.component';

describe('AnalysisDashboardComponent', () => {
  let component: AnalysisDashboardComponent;
  let fixture: ComponentFixture<AnalysisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
