import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaBtnComponent } from './matricula-btn.component';

describe('MatriculaBtnComponent', () => {
  let component: MatriculaBtnComponent;
  let fixture: ComponentFixture<MatriculaBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaBtnComponent]
    });
    fixture = TestBed.createComponent(MatriculaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
