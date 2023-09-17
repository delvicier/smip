import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceComponent } from './dece.component';

describe('DeceComponent', () => {
  let component: DeceComponent;
  let fixture: ComponentFixture<DeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceComponent]
    });
    fixture = TestBed.createComponent(DeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
