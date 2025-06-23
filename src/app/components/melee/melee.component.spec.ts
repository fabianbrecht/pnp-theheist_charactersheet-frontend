import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeComponent } from './melee.component';

describe('MeleeComponent', () => {
  let component: MeleeComponent;
  let fixture: ComponentFixture<MeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
