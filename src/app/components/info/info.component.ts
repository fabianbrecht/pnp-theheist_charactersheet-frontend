import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyComponent } from '../property/property.component';
import { PropertyChangedEvent } from '../../events/PropertyChangedEvent';
import { PropertyClickedEvent } from '../../events/PropertyClickedEvent';
import { IInfo } from '../../interfaces/IInfo';
import { FormsModule } from '@angular/forms';
import { DiceService } from '../../services/dice-service/dice-service.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule, PropertyComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() info!: IInfo;

  @Output() riskChanged = new EventEmitter<PropertyChangedEvent>();
  @Output() connectionsChanged = new EventEmitter<PropertyChangedEvent>();

  @Output() riskClicked = new EventEmitter<PropertyClickedEvent>();
  @Output() connectionsClicked = new EventEmitter<PropertyClickedEvent>();

  constructor(private diceService: DiceService) {}

  stressChanged(event: PropertyChangedEvent) {
    this, this.diceService.setStress(event.property.points);
  }

  stressClicked(event: PropertyClickedEvent) {
    this.diceService.setDiceFormula(event.property.numOfPoints + 'd6');
  }
}
