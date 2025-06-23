import { IAmmo } from '../interfaces/IAmmo';
import { Ammo_12mm } from '../objects/ammo/12mm';
import { Ammo_9mm } from '../objects/ammo/9mm';
import { Ammo_Schrot } from '../objects/ammo/Schrot';

export class Ammo implements IAmmo {
  name: string;
  damageModifier: string;
  armorPiercing: number;

  constructor(name: string, damageModifier: string, armorPiercing: number) {
    this.name = name;
    this.damageModifier = damageModifier;
    this.armorPiercing = armorPiercing;
  }

  static getAllAmmo(): IAmmo[] {
    return [new Ammo_9mm(), new Ammo_12mm(), new Ammo_Schrot()];
  }
}
