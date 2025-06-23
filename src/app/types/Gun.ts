import { IAmmo } from '../interfaces/IAmmo';
import { IGun } from '../interfaces/IGun';
import { IMelee } from '../interfaces/IMelee';
import { IWeapon } from '../interfaces/IWeapon';

export class Gun implements IGun {
  name: string;
  damage: string;
  range: string;
  ammoType: IAmmo;
  armorPiercing: boolean;
  magCurrent: number;
  magMax: number;
  risk: number;

  constructor(
    name: string,
    damage: string,
    range: string,
    ammoType: IAmmo,
    armorPiercing: boolean,
    magCurrent: number,
    magMax: number,
    risk: number
  ) {
    this.name = name;
    this.damage = damage;
    this.range = range;
    this.ammoType = ammoType;
    this.armorPiercing = armorPiercing;
    this.magCurrent = magCurrent;
    this.magMax = magMax;
    this.risk = risk;
  }
  type: string = 'gun';
}
