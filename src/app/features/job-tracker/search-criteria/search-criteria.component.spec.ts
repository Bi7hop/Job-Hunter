import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaComponent } from './search-criteria.component';

describe('SearchCriteriaComponent', () => {
  let component: SearchCriteriaComponent;
  let fixture: ComponentFixture<SearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCriteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
