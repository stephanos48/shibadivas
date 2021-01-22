import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandlerComponent } from './chandler.component';

describe('ChandlerComponent', () => {
  let component: ChandlerComponent;
  let fixture: ComponentFixture<ChandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
