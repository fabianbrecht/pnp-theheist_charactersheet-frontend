import {
  AfterViewInit,
  Component,
  ElementRef,
  Injectable,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

import * as bootstrap from 'bootstrap';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  host: { class: 'modal-component' },
})
export class ModalComponent {
  /* The width of the modal. Can be 'sm', 'md', 'lg', 'xl' and 'xxl' */
  @Input() size: string = 'md';

  /* If true this modal cannot be closed by pressing the backdrop or by pressing escape */
  @Input() static: boolean = false;

  /* If true no close button is displayed in the top right corner */
  @Input() hideClose: boolean = false;

  /* The id of the modal html element */
  @Input() id: string = uuid();

  /* A reference to the outermost div element of the modal */
  @ViewChild('modalElement') modalElement!: ElementRef<Element>;

  /* Variable to store the modal HTMLElement after it was cast to type bootstrap.Modal. Do not use this directly and use this.modalReference instead */
  private _bootsrapModalStore!: bootstrap.Modal;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  /**
   * Creates and returns a reference to the modal as a bootstrap.Modal object
   */
  private get modalReference(): bootstrap.Modal {
    if (!this._bootsrapModalStore) {
      this._bootsrapModalStore = new bootstrap.Modal(
        this.modalElement.nativeElement,
        {}
      );
    }

    return this._bootsrapModalStore;
  }

  /**
   * Close this Modal
   */
  close() {
    this.modalReference.hide();
  }

  /**
   * Open this Modal
   */
  open() {
    this.renderer.appendChild(document.body, this.modalElement.nativeElement);
    this.modalReference.show();
  }

  /**
   * Toggle the open / close state of this Modal
   */
  toggle() {
    this.modalReference.toggle();
  }
}
