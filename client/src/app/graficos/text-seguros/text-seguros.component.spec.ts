import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSegurosComponent } from './text-seguros.component';

describe('TextSegurosComponent', () => {
  let component: TextSegurosComponent;
  let fixture: ComponentFixture<TextSegurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSegurosComponent]
    });
    fixture = TestBed.createComponent(TextSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
