import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IProperty } from '../../interfaces/IProperty';
import Dice from '../../services/Dice';
import { DiceService } from '../../services/dice-service/dice-service.service';

@Component({
  selector: 'app-dice-roller',
  standalone: true,
  imports: [],
  templateUrl: './skill-check-dice-roller.component.html',
  styleUrl: './skill-check-dice-roller.component.scss',
})
export class SkillCheckDiceRollerComponent implements AfterContentInit {
  protected attribute!: IProperty | undefined;
  protected skill!: IProperty | undefined;
  protected stress: number = 0;

  diceFormula: string | undefined;

  @ViewChild('bonus') bonusInput!: ElementRef<HTMLInputElement>;

  constructor(private diceService: DiceService) {}

  ngAfterContentInit(): void {
    this.diceService.setCkillCheckComponent(this);
  }

  setAttribute(property: IProperty) {
    this.attribute = property;
  }

  setSkill(property: IProperty) {
    this.skill = property;
  }

  setStress(stress: number) {
    this.stress = stress;
  }

  rolledValues: number[] = [];
  rolledStressValues: number[] = [];

  close() {
    this.rolledValues = [];
    this.rolledStressValues = [];
    this.attribute = undefined;
    this.skill = undefined;
  }

  rollDiceForSkillcheck() {
    let numOfDice =
      (this.attribute ? this.attribute.points : 0) +
      (this.skill ? this.skill.points : 0) +
      Number(this.bonusInput.nativeElement.value);

    this.rolledValues = new Dice(numOfDice + 'd6').roll().results;
    this.rolledStressValues = new Dice(this.stress + 'd6').roll().results;
  }

  addCustomDiceFormula(diceFormula: string) {
    this.attribute = undefined;
    this.skill = undefined;
    this.diceFormula = diceFormula;
  }
}
