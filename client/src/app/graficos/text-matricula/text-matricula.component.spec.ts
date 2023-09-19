import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMatriculaComponent } from './text-matricula.component';

describe('TextMatriculaComponent', () => {
  let component: TextMatriculaComponent;
  let fixture: ComponentFixture<TextMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMatriculaComponent]
    });
    fixture = TestBed.createComponent(TextMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
