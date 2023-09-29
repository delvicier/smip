import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSeguros2Component } from './text-seguros2.component';

describe('TextSeguros2Component', () => {
  let component: TextSeguros2Component;
  let fixture: ComponentFixture<TextSeguros2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSeguros2Component]
    });
    fixture = TestBed.createComponent(TextSeguros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
