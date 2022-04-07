import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTogglerComponent } from './dropdown-toggler.component';

describe('DropdownTogglerComponent', () => {
  let component: DropdownTogglerComponent;
  let fixture: ComponentFixture<DropdownTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
