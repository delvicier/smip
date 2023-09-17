import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficGeneroComponent } from './grafic-genero.component';

describe('GraficGeneroComponent', () => {
  let component: GraficGeneroComponent;
  let fixture: ComponentFixture<GraficGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficGeneroComponent]
    });
    fixture = TestBed.createComponent(GraficGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
