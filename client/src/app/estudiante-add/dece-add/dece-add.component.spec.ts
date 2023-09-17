import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceAddComponent } from './dece-add.component';

describe('DeceAddComponent', () => {
  let component: DeceAddComponent;
  let fixture: ComponentFixture<DeceAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeceAddComponent]
    });
    fixture = TestBed.createComponent(DeceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
