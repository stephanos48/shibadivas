import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwightComponent } from './dwight.component';

describe('DwightComponent', () => {
  let component: DwightComponent;
  let fixture: ComponentFixture<DwightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
