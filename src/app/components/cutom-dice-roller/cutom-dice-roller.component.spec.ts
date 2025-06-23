import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomDiceRollerComponent } from './cutom-dice-roller.component';

describe('CutomDiceRollerComponent', () => {
  let component: CutomDiceRollerComponent;
  let fixture: ComponentFixture<CutomDiceRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomDiceRollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomDiceRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
