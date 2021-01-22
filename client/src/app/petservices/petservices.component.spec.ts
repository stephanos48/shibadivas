import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetservicesComponent } from './petservices.component';

describe('PetservicesComponent', () => {
  let component: PetservicesComponent;
  let fixture: ComponentFixture<PetservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
