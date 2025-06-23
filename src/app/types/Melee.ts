import { IGun } from '../interfaces/IGun';
import { IMelee } from '../interfaces/IMelee';
import { IWeapon } from '../interfaces/IWeapon';

export class Melee implements IMelee {
  name: string;
  damage: string;
  risk: number;

  constructor(
    name: string,
    damage: string,

    risk: number
  ) {
    this.name = name;
    this.damage = damage;
    this.risk = risk;
  }
  type: string = 'melee';
}
