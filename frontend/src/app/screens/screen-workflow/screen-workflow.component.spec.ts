import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWorkflowComponent } from './screen-workflow.component';

describe('ScreenWorkflowComponent', () => {
  let component: ScreenWorkflowComponent;
  let fixture: ComponentFixture<ScreenWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenWorkflowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
