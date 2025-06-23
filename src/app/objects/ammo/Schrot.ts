import { IAmmo } from '../../interfaces/IAmmo';

export class Ammo_Schrot implements IAmmo {
  name = 'Schrotmunition';
  damageModifier = '+1';
  armorPiercing = 0;
}
