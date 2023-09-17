import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosSearchComponent } from './seguros-search.component';

describe('SegurosSearchComponent', () => {
  let component: SegurosSearchComponent;
  let fixture: ComponentFixture<SegurosSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegurosSearchComponent]
    });
    fixture = TestBed.createComponent(SegurosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
