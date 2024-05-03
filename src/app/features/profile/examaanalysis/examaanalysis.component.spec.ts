import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamaanalysisComponent } from './examaanalysis.component';

describe('ExamaanalysisComponent', () => {
  let component: ExamaanalysisComponent;
  let fixture: ComponentFixture<ExamaanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamaanalysisComponent]
    });
    fixture = TestBed.createComponent(ExamaanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
