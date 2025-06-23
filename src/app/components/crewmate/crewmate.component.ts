import { Component } from '@angular/core';
import ICrewmate from '../../interfaces/ICrewmate';

@Component({
  selector: 'app-crewmate',
  standalone: true,
  imports: [],
  templateUrl: './crewmate.component.html',
  styleUrl: './crewmate.component.scss',
})
export class CrewmateComponent implements ICrewmate {
  name: string = '';
  player: string = '';
  role: string = '';
}
