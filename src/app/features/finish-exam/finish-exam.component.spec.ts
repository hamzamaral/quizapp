import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishExamComponent } from './finish-exam.component';

describe('FinishExamComponent', () => {
  let component: FinishExamComponent;
  let fixture: ComponentFixture<FinishExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
