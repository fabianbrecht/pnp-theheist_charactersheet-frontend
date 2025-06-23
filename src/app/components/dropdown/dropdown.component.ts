import {
  AfterViewChecked,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements AfterViewChecked {
  isOpen: boolean = false;
  protected positionChecked: boolean = false;

  /* A flag that is raised after the button was clicked, so that the ngAfterViewChecked function knows to do something on this cycle */
  protected clickedFlag: boolean = false;

  /* A reference to the dropdown menu HTMLDivElement */
  @ViewChild('dropdownMenu') protected dropdownMenu!: ElementRef;

  /* If true, a small arrow is added next to the dropdown button */
  @Input() arrow: boolean = false;

  /* If true a open and close animation is added to the dropdown menu */
  @Input() animate = false;

  /* The name of the css open animation */
  @Input() openAnimation = 'animation_fadeIn_Up';

  /* The name of the css close animation */
  @Input() closeAnimation = 'animation_fadeOut_Down';

  /* Aligns the dropdown menu right instead of left  */
  @Input() alignMenuRight = false;

  constructor(private elementRef: ElementRef) {}

  /**
   * Applies the 'adjust right' fix
   */
  ngAfterViewChecked(): void {
    if (!this.alignMenuRight && !this.positionChecked && this.clickedFlag) {
      this.adjustDropdownPosition();
    } else if (this.alignMenuRight) {
      this.dropdownMenu.nativeElement.classList.add('adjust-right');
    }
  }

  /**
   * Closes the dropdown if an empty space around the menu is clicked
   * @param targetElement The clicked HTMLElement
   */
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const isClickedInside =
      this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.closeDropdown();
    }
  }

  /**
   * Toggles dropdown menu
   */
  toggleDropdown(): void {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  /**
   * Closes the dropdown menu
   */
  closeDropdown() {
    if (this.animate) {
      this.dropdownMenu.nativeElement.classList.remove(this.openAnimation);
      this.dropdownMenu.nativeElement.classList.add(this.closeAnimation);

      // Closing the dropdown is handled in the animationEnd function
      return;
    }
    this.isOpen = false;
    this.positionChecked = false;
    this.dropdownMenu.nativeElement.classList.remove('adjust-right');
  }

  /**
   * Is called after the close animation ended and closes the dropdown
   */
  animationEnd() {
    if (
      this.animate &&
      this.dropdownMenu.nativeElement.classList.contains(this.closeAnimation)
    ) {
      this.dropdownMenu.nativeElement.classList.remove(this.openAnimation);
      this.dropdownMenu.nativeElement.classList.add(this.closeAnimation);

      this.isOpen = false;
      this.positionChecked = false;
      this.dropdownMenu.nativeElement.classList.remove('adjust-right');
    }
  }

  /**
   * Opens the dropdown menu
   */
  openDropdown() {
    if (this.animate) {
      this.dropdownMenu.nativeElement.classList.remove(this.closeAnimation);
      this.dropdownMenu.nativeElement.classList.add(this.openAnimation);
    }
    this.isOpen = true;
    this.clickedFlag = true;
  }

  /**
   * Adjust the dropdown menu position left or right
   */
  adjustDropdownPosition(): void {
    const dropdownMenu = this.dropdownMenu.nativeElement;
    const dropdownMenuRect = dropdownMenu.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    if (dropdownMenuRect.right > bodyRect.right) {
      dropdownMenu.classList.add('adjust-right');
    } else {
      dropdownMenu.classList.remove('adjust-right');
    }
    this.positionChecked = true;
    this.clickedFlag = false;
  }
}
