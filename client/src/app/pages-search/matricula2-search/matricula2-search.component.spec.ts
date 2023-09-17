import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matricula2SearchComponent } from './matricula2-search.component';

describe('Matricula2SearchComponent', () => {
  let component: Matricula2SearchComponent;
  let fixture: ComponentFixture<Matricula2SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Matricula2SearchComponent]
    });
    fixture = TestBed.createComponent(Matricula2SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
