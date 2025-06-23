import { IWeapon } from './IWeapon';

export interface IMelee extends IWeapon {
  name: string;
  damage: string;
  risk: number;
}
