import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDistributionComponent } from './platform-distribution.component';

describe('PlatformDistributionComponent', () => {
  let component: PlatformDistributionComponent;
  let fixture: ComponentFixture<PlatformDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformDistributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
