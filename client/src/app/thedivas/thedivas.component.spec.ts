import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedivasComponent } from './thedivas.component';

describe('ThedivasComponent', () => {
  let component: ThedivasComponent;
  let fixture: ComponentFixture<ThedivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThedivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThedivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
