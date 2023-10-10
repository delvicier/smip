import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHomeErrorComponent } from './dialog-home-error.component';

describe('DialogHomeErrorComponent', () => {
  let component: DialogHomeErrorComponent;
  let fixture: ComponentFixture<DialogHomeErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogHomeErrorComponent]
    });
    fixture = TestBed.createComponent(DialogHomeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
