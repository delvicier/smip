import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceResultComponent } from './dece-result.component';

describe('DeceResultComponent', () => {
  let component: DeceResultComponent;
  let fixture: ComponentFixture<DeceResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceResultComponent]
    });
    fixture = TestBed.createComponent(DeceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
