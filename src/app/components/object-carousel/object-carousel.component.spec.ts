import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCarouselComponent } from './object-carousel.component';

describe('ObjectCarouselComponent', () => {
  let component: ObjectCarouselComponent;
  let fixture: ComponentFixture<ObjectCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
