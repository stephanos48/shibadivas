import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistCreateComponent } from './waitlist-create.component';

describe('WaitlistCreateComponent', () => {
  let component: WaitlistCreateComponent;
  let fixture: ComponentFixture<WaitlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
