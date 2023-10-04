import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAddDialogComponent } from './record-add-dialog.component';

describe('RecordAddDialogComponent', () => {
  let component: RecordAddDialogComponent;
  let fixture: ComponentFixture<RecordAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAddDialogComponent]
    });
    fixture = TestBed.createComponent(RecordAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
