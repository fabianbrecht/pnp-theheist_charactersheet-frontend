import { IProperty } from '../interfaces/IProperty';

export class PropertyClickedEvent extends Event {
  property: IProperty;

  constructor(property: IProperty) {
    super('propertyClicked');
    this.property = property;
  }
}
