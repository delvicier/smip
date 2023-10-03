import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEditDialogComponent } from './record-edit-dialog.component';

describe('RecordEditDialogComponent', () => {
  let component: RecordEditDialogComponent;
  let fixture: ComponentFixture<RecordEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordEditDialogComponent]
    });
    fixture = TestBed.createComponent(RecordEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
