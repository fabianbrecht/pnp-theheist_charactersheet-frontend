import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewmateComponent } from './crewmate.component';

describe('CrewmateComponent', () => {
  let component: CrewmateComponent;
  let fixture: ComponentFixture<CrewmateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewmateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
