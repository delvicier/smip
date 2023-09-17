import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceEditComponent } from './dece-edit.component';

describe('DeceEditComponent', () => {
  let component: DeceEditComponent;
  let fixture: ComponentFixture<DeceEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceEditComponent]
    });
    fixture = TestBed.createComponent(DeceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
