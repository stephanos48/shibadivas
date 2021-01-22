import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessaComponent } from './tessa.component';

describe('TessaComponent', () => {
  let component: TessaComponent;
  let fixture: ComponentFixture<TessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
