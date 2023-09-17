import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSearchComponent } from './record-search.component';

describe('RecordSearchComponent', () => {
  let component: RecordSearchComponent;
  let fixture: ComponentFixture<RecordSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordSearchComponent]
    });
    fixture = TestBed.createComponent(RecordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
