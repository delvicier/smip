import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosResultComponent } from './seguros-result.component';

describe('SegurosResultComponent', () => {
  let component: SegurosResultComponent;
  let fixture: ComponentFixture<SegurosResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegurosResultComponent]
    });
    fixture = TestBed.createComponent(SegurosResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
