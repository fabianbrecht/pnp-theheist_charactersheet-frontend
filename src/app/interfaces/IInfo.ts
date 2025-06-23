import { IProperty } from './IProperty';

export interface IInfo {
  name: string;
  age: string;
  pronouns: string;
  hpCurrent: number;
  hpMax: number;
  favors: number;
  dollar: number;
  crypto: number;

  stress: IProperty;
  risk: IProperty;
  connections: IProperty;
}
