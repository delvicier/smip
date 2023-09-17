import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficSegurosComponent } from './grafic-seguros.component';

describe('GraficSegurosComponent', () => {
  let component: GraficSegurosComponent;
  let fixture: ComponentFixture<GraficSegurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficSegurosComponent]
    });
    fixture = TestBed.createComponent(GraficSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
