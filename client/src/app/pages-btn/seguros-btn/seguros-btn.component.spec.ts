import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosBtnComponent } from './seguros-btn.component';

describe('SegurosBtnComponent', () => {
  let component: SegurosBtnComponent;
  let fixture: ComponentFixture<SegurosBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegurosBtnComponent]
    });
    fixture = TestBed.createComponent(SegurosBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
