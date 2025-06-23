import { Injectable } from '@angular/core';
import { SkillCheckDiceRollerComponent } from '../../components/skill-check-dice-roller/skill-check-dice-roller.component';
import Dice from '../Dice';
import { IProperty } from '../../interfaces/IProperty';
import { CutomDiceRollerComponent } from '../../components/cutom-dice-roller/cutom-dice-roller.component';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  private skillCheckComponent: SkillCheckDiceRollerComponent | undefined =
    undefined;

  private CustomDiceComponent: CutomDiceRollerComponent | undefined = undefined;

  setCkillCheckComponent(instance: SkillCheckDiceRollerComponent) {
    this.skillCheckComponent = instance;
    console.log('New Skillcheck Container added: ' + instance);
  }

  setCustomDiceComponent(instance: CutomDiceRollerComponent) {
    this.CustomDiceComponent = instance;
    console.log('New CutomDiceRoller Container added: ' + instance);
  }

  setAttribute(attribute: IProperty) {
    if (this.skillCheckComponent === undefined) {
      console.error('DiceService: No Skill Check Component is defined');
    }
    this.skillCheckComponent?.setAttribute(attribute);
  }

  setSkill(skill: IProperty) {
    if (this.skillCheckComponent === undefined) {
      console.error('DiceService: No Skill Check Component is defined');
    }
    this.skillCheckComponent?.setSkill(skill);
  }

  setStress(stress: number) {
    if (this.skillCheckComponent === undefined) {
      console.error('DiceService: No Skill Check Component is defined');
    } else {
      this.skillCheckComponent.setStress(stress);
    }
  }

  setDiceFormula(formula: string) {
    if (this.CustomDiceComponent === undefined) {
      console.error('DiceService: No Custom Dice Component is defined');
    } else {
      this.CustomDiceComponent.setFormula(formula);
    }
  }

  roll(phrase: string): {
    results: number[];
    total: number;
  } {
    return new Dice(phrase).roll();
  }
}
