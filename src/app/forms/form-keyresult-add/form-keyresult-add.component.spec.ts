import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKeyresultAddComponent } from './form-keyresult-add.component';

describe('FormKeyresultAddComponent', () => {
  let component: FormKeyresultAddComponent;
  let fixture: ComponentFixture<FormKeyresultAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKeyresultAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKeyresultAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
