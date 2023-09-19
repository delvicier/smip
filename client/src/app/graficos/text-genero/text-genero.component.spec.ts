import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGeneroComponent } from './text-genero.component';

describe('TextGeneroComponent', () => {
  let component: TextGeneroComponent;
  let fixture: ComponentFixture<TextGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextGeneroComponent]
    });
    fixture = TestBed.createComponent(TextGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
