import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyType } from '../properties/types';
import { IProperty } from '../../interfaces/IProperty';
import { PropertyClickedEvent } from '../../events/PropertyClickedEvent';
import { PropertyChangedEvent } from '../../events/PropertyChangedEvent';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
})
export class PropertyComponent implements IProperty {
  @Input() name!: string;
  @Input() points!: number;
  @Input() type!: PropertyType;

  @Input() numOfPoints = 5;

  @Output() propertyClickedEvent = new EventEmitter<PropertyClickedEvent>();
  @Output() propertyChangedEvent = new EventEmitter<PropertyChangedEvent>();

  checkboxChanged(event: Event, index: number) {
    let checked: boolean = (event.target as HTMLInputElement).checked;
    if (checked) this.points = index + 1;
    else this.points = index;
    this.propertyChangedEvent.emit(new PropertyChangedEvent(this));
  }

  properyClicked() {
    this.propertyClickedEvent.emit(new PropertyClickedEvent(this));
  }
}
