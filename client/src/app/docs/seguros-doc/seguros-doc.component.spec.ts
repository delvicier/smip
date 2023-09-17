import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosDocComponent } from './seguros-doc.component';

describe('SegurosDocComponent', () => {
  let component: SegurosDocComponent;
  let fixture: ComponentFixture<SegurosDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegurosDocComponent]
    });
    fixture = TestBed.createComponent(SegurosDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
