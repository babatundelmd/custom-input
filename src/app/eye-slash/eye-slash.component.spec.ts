import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeSlashComponent } from './eye-slash.component';

describe('EyeSlashComponent', () => {
  let component: EyeSlashComponent;
  let fixture: ComponentFixture<EyeSlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeSlashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
