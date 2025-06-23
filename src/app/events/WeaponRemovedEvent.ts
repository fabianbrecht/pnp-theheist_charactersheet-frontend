import { IWeapon } from '../interfaces/IWeapon';

export class WeaponRemovedEvent extends Event {
  weapon: IWeapon;

  constructor(weapon: IWeapon) {
    super('weaponRemoved');
    this.weapon = weapon;
  }
}
