import { AfterContentInit, Component } from '@angular/core';
import { DiceService } from '../../services/dice-service/dice-service.service';
import Dice from '../../services/Dice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cutom-dice-roller',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cutom-dice-roller.component.html',
  styleUrl: './cutom-dice-roller.component.scss',
})
export class CutomDiceRollerComponent implements AfterContentInit {
  protected visible: boolean = false;
  protected formula: string = '';

  constructor(private diceService: DiceService) {}

  ngAfterContentInit(): void {
    this.diceService.setCustomDiceComponent(this);
  }

  protected diceResult: { results: number[]; total: number } = {
    results: [],
    total: 0,
  };

  setFormula(formula: string) {
    this.formula = formula;
    this.visible = true;
  }

  close() {
    debugger;
    this.diceResult = {
      results: [],
      total: 0,
    };
    this.visible = false;
  }

  rollDice() {
    this.diceResult = new Dice(this.formula).roll();
  }
}
