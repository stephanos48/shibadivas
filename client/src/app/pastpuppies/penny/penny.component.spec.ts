import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PennyComponent } from './penny.component';

describe('PennyComponent', () => {
  let component: PennyComponent;
  let fixture: ComponentFixture<PennyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PennyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
