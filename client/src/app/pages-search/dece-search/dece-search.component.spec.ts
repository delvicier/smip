import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceSearchComponent } from './dece-search.component';

describe('DeceSearchComponent', () => {
  let component: DeceSearchComponent;
  let fixture: ComponentFixture<DeceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceSearchComponent]
    });
    fixture = TestBed.createComponent(DeceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
