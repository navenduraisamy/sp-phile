import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontlyWrappedComponent } from './montly-wrapped.component';

describe('MontlyWrappedComponent', () => {
  let component: MontlyWrappedComponent;
  let fixture: ComponentFixture<MontlyWrappedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontlyWrappedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontlyWrappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
