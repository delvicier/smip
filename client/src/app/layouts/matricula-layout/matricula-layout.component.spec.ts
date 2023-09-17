import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaLayoutComponent } from './matricula-layout.component';

describe('MatriculaLayoutComponent', () => {
  let component: MatriculaLayoutComponent;
  let fixture: ComponentFixture<MatriculaLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaLayoutComponent]
    });
    fixture = TestBed.createComponent(MatriculaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
