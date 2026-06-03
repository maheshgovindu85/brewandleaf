import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLinkedinComponent } from './screen-linkedin.component';

describe('ScreenLinkedinComponent', () => {
  let component: ScreenLinkedinComponent;
  let fixture: ComponentFixture<ScreenLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenLinkedinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
