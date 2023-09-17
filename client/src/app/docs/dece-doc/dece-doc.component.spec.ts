import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceDocComponent } from './dece-doc.component';

describe('DeceDocComponent', () => {
  let component: DeceDocComponent;
  let fixture: ComponentFixture<DeceDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceDocComponent]
    });
    fixture = TestBed.createComponent(DeceDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
