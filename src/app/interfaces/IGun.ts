import { IAmmo } from './IAmmo';
import { IWeapon } from './IWeapon';

export interface IGun extends IWeapon {
  name: string;
  damage: string;
  range: string;
  ammoType: IAmmo;
  magCurrent: number;
  magMax: number;
  risk: number;
}
