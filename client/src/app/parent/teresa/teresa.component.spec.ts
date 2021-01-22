import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeresaComponent } from './teresa.component';

describe('TeresaComponent', () => {
  let component: TeresaComponent;
  let fixture: ComponentFixture<TeresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
