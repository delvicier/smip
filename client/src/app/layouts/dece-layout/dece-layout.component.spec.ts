import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceLayoutComponent } from './dece-layout.component';

describe('DeceLayoutComponent', () => {
  let component: DeceLayoutComponent;
  let fixture: ComponentFixture<DeceLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceLayoutComponent]
    });
    fixture = TestBed.createComponent(DeceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
