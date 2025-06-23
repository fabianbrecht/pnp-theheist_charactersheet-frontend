import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './object-carousel.component.html',
  styleUrl: './object-carousel.component.scss',
})
export class ObjectCarouselComponent {
  // Array to hold items for the slideshow
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  // Index to track the current first visible item
  currentIndex = 0;

  // Function to go to the next slide
  nextSlide() {
    if (this.currentIndex < this.items.length - 3) {
      this.currentIndex++;
    }
  }

  // Function to go to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
