import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUploadComponent } from './screen-upload.component';

describe('ScreenUploadComponent', () => {
  let component: ScreenUploadComponent;
  let fixture: ComponentFixture<ScreenUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
