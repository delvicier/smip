import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaSearchComponent } from './matricula-search.component';

describe('MatriculaSearchComponent', () => {
  let component: MatriculaSearchComponent;
  let fixture: ComponentFixture<MatriculaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaSearchComponent]
    });
    fixture = TestBed.createComponent(MatriculaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
