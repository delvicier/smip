import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomeComponent } from './layout-home.component';

describe('LayoutHomeComponent', () => {
  let component: LayoutHomeComponent;
  let fixture: ComponentFixture<LayoutHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHomeComponent]
    });
    fixture = TestBed.createComponent(LayoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
