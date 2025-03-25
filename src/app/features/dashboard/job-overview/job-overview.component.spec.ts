import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewComponent } from './job-overview.component';

describe('JobOverviewComponent', () => {
  let component: JobOverviewComponent;
  let fixture: ComponentFixture<JobOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
