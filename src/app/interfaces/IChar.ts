import { IInfo } from './IInfo';
import { IProperty } from './IProperty';

import { Role } from '../types/Role';
import { Property } from '../objects/Property';
import { IWeapon } from './IWeapon';
import ICrewmate from './ICrewmate';

export interface IChar {
  id: string;
  info: IInfo;

  attributes: { body: IProperty[]; social: IProperty[]; brains: IProperty[] };
  skills: Property[];

  roles: Role[];

  notes: string;

  inventory: string;

  weapons: IWeapon[];

  crewmate1: ICrewmate;
  crewmate2: ICrewmate;
  crewmate3: ICrewmate;
  crewmate4: ICrewmate;
}
