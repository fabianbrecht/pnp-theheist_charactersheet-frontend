import { Component, OnInit } from '@angular/core';
import { AttributesComponent } from '../attributes/attributes.component';
import { InfoComponent } from '../info/info.component';
import { SkillsComponent } from '../skills/skills.component';
import { IProperty } from '../../interfaces/IProperty';
import { PropertyClickedEvent } from '../../events/PropertyClickedEvent';
import { PropertyChangedEvent } from '../../events/PropertyChangedEvent';
import { RolesComponent } from '../roles/roles.component';
import { IChar } from '../../interfaces/IChar';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { SkillCheckDiceRollerComponent } from '../skill-check-dice-roller/skill-check-dice-roller.component';
import { CutomDiceRollerComponent } from '../cutom-dice-roller/cutom-dice-roller.component';
import { WeaponsComponent } from '../weapons/weapons.component';
import { ModalComponent } from '../modal/modal.component';
import { CrewmateComponent } from '../crewmate/crewmate.component';
import { CharacterService } from '../../services/character.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charsheet',
  standalone: true,
  imports: [
    InfoComponent,
    AttributesComponent,
    SkillsComponent,
    RolesComponent,
    SkillCheckDiceRollerComponent,
    CutomDiceRollerComponent,
    WeaponsComponent,
    ModalComponent,
    CrewmateComponent,
    FormsModule,
  ],
  templateUrl: './charsheet.component.html',
  styleUrl: './charsheet.component.scss',
})
export class CharsheetComponent implements OnInit {
  character!: IChar;
  id!: string;

  isLoading: boolean = true;
  subscription!: Subscription;

  selectedAttribute!: IProperty | undefined;
  selectedSkill!: IProperty | undefined;
  selectedStandaloneProperty!: IProperty | undefined;

  constructor(private charService: CharacterService, private router: Router) {}

  param(): URLSearchParams {
    if (window.top !== null) {
      const url: URL = new URL(window.top.location.href);
      const params: URLSearchParams = url.searchParams;
      return params;
    } else return new URLSearchParams();
  }

  async ngOnInit() {
    debugger;
    let idParam = this.param().get('id');
    if (idParam === null) {
      const newId: string = uuid();
      this.router.navigate(['/'], { queryParams: { id: newId } });
      this.id = newId;
    } else {
      this.id = idParam;
    }

    const res = await this.charService.get(this.id);
    if (res.data) {
      console.log('Loaded character');
      this.character = res.data;
      console.log(this.character);
    } else {
      const res = await this.charService.get('0');
      if (res.data) {
        console.log('Loaded default character');
        this.character = res.data;
        this.character.id = this.id;
        this.charService.save(this.character);
        console.log(this.character);
      } else {
        console.error(res.error?.errorText);
      }
    }

    setInterval(() => {
      this.charService.update(this.id, this.character);
      console.log('Updated character ' + this.id, this.character);
    }, 10000);

    this.isLoading = false;
  }

  /********************* Update *********************/
  updateAttribute(property: IProperty) {
    console.log('Trying to update property ' + property.name);

    this.character.attributes.body.forEach((p) => {
      if (p.name === property.name) p.points = property.points;
    });
  }

  /********************* Events *********************/

  attributeClicked(event: PropertyClickedEvent) {
    this.selectedAttribute = event.property;
    this.selectedStandaloneProperty = undefined;
  }

  attributeChanged(event: PropertyChangedEvent) {
    this.updateAttribute(event.property);
  }

  skillClicked(event: PropertyClickedEvent) {
    this.selectedSkill = event.property;
    this.selectedStandaloneProperty = undefined;
  }

  standaloneClicked(event: PropertyClickedEvent) {
    this.selectedStandaloneProperty = event.property;
    this.selectedAttribute = undefined;
    this.selectedSkill = undefined;
  }

  stressChanged(event: PropertyChangedEvent) {
    this.character.info.stress.points = event.property.points;
  }

  cleanProperties() {
    this.selectedAttribute = undefined;
    this.selectedSkill = undefined;
    this.selectedStandaloneProperty = undefined;
  }
}
