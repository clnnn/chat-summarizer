import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBarComponent } from './type-bar.component';

describe('TypeBarComponent', () => {
  let component: TypeBarComponent;
  let fixture: ComponentFixture<TypeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
