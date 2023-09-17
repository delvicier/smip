import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaResultComponent } from './matricula-result.component';

describe('MatriculaResultComponent', () => {
  let component: MatriculaResultComponent;
  let fixture: ComponentFixture<MatriculaResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaResultComponent]
    });
    fixture = TestBed.createComponent(MatriculaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
