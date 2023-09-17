import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDocComponent } from './record-doc.component';

describe('RecordDocComponent', () => {
  let component: RecordDocComponent;
  let fixture: ComponentFixture<RecordDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordDocComponent]
    });
    fixture = TestBed.createComponent(RecordDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
