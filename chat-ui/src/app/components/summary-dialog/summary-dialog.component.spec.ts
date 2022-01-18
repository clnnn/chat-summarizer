import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDialogComponent } from './summary-dialog.component';

describe('SummaryDialogComponent', () => {
  let component: SummaryDialogComponent;
  let fixture: ComponentFixture<SummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
