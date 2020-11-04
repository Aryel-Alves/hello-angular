import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBraboComponent } from './form-brabo.component';

describe('FormBraboComponent', () => {
  let component: FormBraboComponent;
  let fixture: ComponentFixture<FormBraboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBraboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBraboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
