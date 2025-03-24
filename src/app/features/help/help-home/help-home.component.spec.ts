import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpHomeComponent } from './help-home.component';

describe('HelpHomeComponent', () => {
  let component: HelpHomeComponent;
  let fixture: ComponentFixture<HelpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
