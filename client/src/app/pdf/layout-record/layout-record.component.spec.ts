import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRecordComponent } from './layout-record.component';

describe('LayoutRecordComponent', () => {
  let component: LayoutRecordComponent;
  let fixture: ComponentFixture<LayoutRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutRecordComponent]
    });
    fixture = TestBed.createComponent(LayoutRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
