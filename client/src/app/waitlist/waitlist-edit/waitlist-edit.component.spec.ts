import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistEditComponent } from './waitlist-edit.component';

describe('WaitlistEditComponent', () => {
  let component: WaitlistEditComponent;
  let fixture: ComponentFixture<WaitlistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
