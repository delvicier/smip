import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Record2SearchComponent } from './record2-search.component';

describe('Record2SearchComponent', () => {
  let component: Record2SearchComponent;
  let fixture: ComponentFixture<Record2SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Record2SearchComponent]
    });
    fixture = TestBed.createComponent(Record2SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
