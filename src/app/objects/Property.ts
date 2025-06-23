import { IProperty } from '../interfaces/IProperty';

export class Property implements IProperty {
  name: string;
  points: number;
  numOfPoints: number;

  constructor(name: string, points: number, numOfPoints: number) {
    this.name = name;
    this.points = points;
    this.numOfPoints = numOfPoints;
  }
}
