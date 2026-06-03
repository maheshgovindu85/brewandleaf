import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCompactComponent } from './screen-compact.component';

describe('ScreenCompactComponent', () => {
  let component: ScreenCompactComponent;
  let fixture: ComponentFixture<ScreenCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenCompactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
