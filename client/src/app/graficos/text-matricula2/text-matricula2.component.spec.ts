import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMatricula2Component } from './text-matricula2.component';

describe('TextMatricula2Component', () => {
  let component: TextMatricula2Component;
  let fixture: ComponentFixture<TextMatricula2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMatricula2Component]
    });
    fixture = TestBed.createComponent(TextMatricula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
