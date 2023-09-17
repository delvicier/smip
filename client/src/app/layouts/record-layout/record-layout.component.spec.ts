import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLayoutComponent } from './record-layout.component';

describe('RecordLayoutComponent', () => {
  let component: RecordLayoutComponent;
  let fixture: ComponentFixture<RecordLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordLayoutComponent]
    });
    fixture = TestBed.createComponent(RecordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
