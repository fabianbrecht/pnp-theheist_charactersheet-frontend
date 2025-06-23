import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProperty } from '../../interfaces/IProperty';
import { PropertyComponent } from '../property/property.component';
import { PropertyClickedEvent } from '../../events/PropertyClickedEvent';
import { DiceService } from '../../services/dice-service/dice-service.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [PropertyComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() skills!: IProperty[];

  constructor(private diceService: DiceService) {}

  skillClicked(event: PropertyClickedEvent) {
    this.diceService.setSkill(event.property);
  }
}
