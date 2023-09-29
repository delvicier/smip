import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGenero2Component } from './text-genero2.component';

describe('TextGenero2Component', () => {
  let component: TextGenero2Component;
  let fixture: ComponentFixture<TextGenero2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextGenero2Component]
    });
    fixture = TestBed.createComponent(TextGenero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
