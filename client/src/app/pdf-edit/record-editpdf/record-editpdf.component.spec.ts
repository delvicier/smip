import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEditpdfComponent } from './record-editpdf.component';

describe('RecordEditpdfComponent', () => {
  let component: RecordEditpdfComponent;
  let fixture: ComponentFixture<RecordEditpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordEditpdfComponent]
    });
    fixture = TestBed.createComponent(RecordEditpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
