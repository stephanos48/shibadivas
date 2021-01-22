import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeedonkComponent } from './zeedonk.component';

describe('ZeedonkComponent', () => {
  let component: ZeedonkComponent;
  let fixture: ComponentFixture<ZeedonkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeedonkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeedonkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
