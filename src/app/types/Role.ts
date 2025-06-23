import { IRole } from '../interfaces/IRole';

export class Role implements IRole {
  name: String;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;

  constructor(
    name: String,
    feature1: Feature,
    feature2: Feature,
    feature3: Feature
  ) {
    this.name = name;
    this.feature1 = feature1;
    this.feature2 = feature2;
    this.feature3 = feature3;
  }
}

export class Feature {
  name: String;
  checked: boolean;
  description: String;

  constructor(name: String, checked: boolean, description: String) {
    this.name = name;
    this.checked = checked;
    this.description = description;
  }
}
