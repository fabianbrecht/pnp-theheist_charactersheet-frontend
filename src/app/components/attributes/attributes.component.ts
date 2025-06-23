import { Component, Input, Output } from '@angular/core';
import { PropertyComponent } from '../property/property.component';

import { IProperty } from '../../interfaces/IProperty';
import { PropertyClickedEvent } from '../../events/PropertyClickedEvent';
import { DiceService } from '../../services/dice-service/dice-service.service';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [PropertyComponent],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.scss',
})
export class AttributesComponent {
  @Input() body!: IProperty[];
  @Input() social!: IProperty[];
  @Input() brain!: IProperty[];

  constructor(private diceService: DiceService) {}

  attributeClicked(event: PropertyClickedEvent) {
    this.diceService.setAttribute(event.property);
  }
}
