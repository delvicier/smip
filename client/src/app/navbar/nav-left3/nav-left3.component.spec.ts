import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeft3Component } from './nav-left3.component';

describe('NavLeft3Component', () => {
  let component: NavLeft3Component;
  let fixture: ComponentFixture<NavLeft3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLeft3Component]
    });
    fixture = TestBed.createComponent(NavLeft3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
