import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceBtnComponent } from './dece-btn.component';

describe('DeceBtnComponent', () => {
  let component: DeceBtnComponent;
  let fixture: ComponentFixture<DeceBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceBtnComponent]
    });
    fixture = TestBed.createComponent(DeceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
