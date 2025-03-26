import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerConfigComponent } from './tracker-config.component';

describe('TrackerConfigComponent', () => {
  let component: TrackerConfigComponent;
  let fixture: ComponentFixture<TrackerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
