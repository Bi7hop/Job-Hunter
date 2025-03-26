import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSelectorComponent } from './portal-selector.component';

describe('PortalSelectorComponent', () => {
  let component: PortalSelectorComponent;
  let fixture: ComponentFixture<PortalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
