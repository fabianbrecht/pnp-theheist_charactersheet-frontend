import { AfterViewInit, Component } from '@angular/core';
import { IModalContent } from '../../interfaces/IModalContent';
import { ModalService } from '../../services/dice-service/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
})
export class ModalContainerComponent implements AfterViewInit {
  protected modals: IModalContent[] = [];

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.setComponent(this);
  }

  addNewModal(modalContent: IModalContent) {
    this.modals.push(modalContent);
  }
}
