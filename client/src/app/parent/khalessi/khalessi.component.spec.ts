import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhalessiComponent } from './khalessi.component';

describe('KhalessiComponent', () => {
  let component: KhalessiComponent;
  let fixture: ComponentFixture<KhalessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhalessiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhalessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
