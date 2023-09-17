import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordBtnComponent } from './record-btn.component';

describe('RecordBtnComponent', () => {
  let component: RecordBtnComponent;
  let fixture: ComponentFixture<RecordBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordBtnComponent]
    });
    fixture = TestBed.createComponent(RecordBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
