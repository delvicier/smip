import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeft2Component } from './nav-left2.component';

describe('NavLeft2Component', () => {
  let component: NavLeft2Component;
  let fixture: ComponentFixture<NavLeft2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLeft2Component]
    });
    fixture = TestBed.createComponent(NavLeft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
