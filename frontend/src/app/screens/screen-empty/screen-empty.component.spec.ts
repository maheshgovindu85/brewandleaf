import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEmptyComponent } from './screen-empty.component';

describe('ScreenEmptyComponent', () => {
  let component: ScreenEmptyComponent;
  let fixture: ComponentFixture<ScreenEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
