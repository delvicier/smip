import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaAddComponent } from './matricula-add.component';

describe('MatriculaAddComponent', () => {
  let component: MatriculaAddComponent;
  let fixture: ComponentFixture<MatriculaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaAddComponent]
    });
    fixture = TestBed.createComponent(MatriculaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
