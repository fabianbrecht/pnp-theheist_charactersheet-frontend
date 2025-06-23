import { Component, Input, ViewChild } from '@angular/core';
import { IRole } from '../../interfaces/IRole';
import { ModalComponent } from '../modal/modal.component';
import { Feature } from '../../types/Role';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent {
  @Input() role!: IRole;

  @ViewChild('descriptionModal') protected modal!: ModalComponent;

  selectedFeature: Feature | undefined = undefined;

  openDescription(feature: Feature) {
    this.selectedFeature = feature;
    this.modal.open();
  }
}
