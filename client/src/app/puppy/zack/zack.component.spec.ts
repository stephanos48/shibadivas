import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZackComponent } from './zack.component';

describe('ZackComponent', () => {
  let component: ZackComponent;
  let fixture: ComponentFixture<ZackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
