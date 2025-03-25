import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAnalysisComponent } from './skill-analysis.component';

describe('SkillAnalysisComponent', () => {
  let component: SkillAnalysisComponent;
  let fixture: ComponentFixture<SkillAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
