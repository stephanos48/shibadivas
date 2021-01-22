import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastpuppiesComponent } from './pastpuppies.component';

describe('PastpuppiesComponent', () => {
  let component: PastpuppiesComponent;
  let fixture: ComponentFixture<PastpuppiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastpuppiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpuppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
