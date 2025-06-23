import { AfterContentInit, Component, Input } from '@angular/core';
import { IGun } from '../../interfaces/IGun';
import { GunComponent } from '../gun/gun.component';
import { ObjectCarouselComponent } from '../object-carousel/object-carousel.component';
import { CommonModule } from '@angular/common';
import { IWeapon } from '../../interfaces/IWeapon';
import { MeleeComponent } from '../melee/melee.component';
import { GunService } from '../../services/gun.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { IMelee } from '../../interfaces/IMelee';
import { MeleeService } from '../../services/melee.service copy';
import { WeaponRemovedEvent } from '../../events/WeaponRemovedEvent';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [
    ObjectCarouselComponent,
    GunComponent,
    MeleeComponent,
    DropdownComponent,
    CommonModule,
  ],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss',
})
export class WeaponsComponent implements AfterContentInit {
  @Input() weapons!: IWeapon[];

  // Index to track the current first visible item
  currentIndex = 0;

  protected gunList: IGun[] = [];
  protected meleeList: IMelee[] = [];

  constructor(
    private gunService: GunService,
    private meleeService: MeleeService
  ) {}

  async ngAfterContentInit(): Promise<void> {
    await this.getGuns();
    await this.getMelees();
  }

  addWeapon(weapon: IWeapon) {
    this.weapons = [...this.weapons, weapon];
  }

  removeWeapon(event: WeaponRemovedEvent) {
    const index = this.weapons.indexOf(event.weapon, 0);
    if (index > -1) {
      this.weapons.splice(index, 1);
      console.log('Removed weapon ', event.weapon);
      this.weapons = [...this.weapons];
    } else {
      console.error('Could not delete weapon ', event.weapon);
    }
  }

  toGun(weapon: IWeapon): IGun {
    return weapon as IGun;
  }

  toMelee(weapon: IWeapon): IMelee {
    return weapon as IMelee;
  }

  // Function to go to the next slide
  nextSlide() {
    if (this.currentIndex < this.weapons.length - 3) {
      this.currentIndex++;
    }
  }

  // Function to go to the previous slide
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  async getGuns() {
    const res = await this.gunService.getAll();

    if (res.data) {
      this.gunList = res.data;
    }
  }

  async getMelees() {
    const res = await this.meleeService.getAll();

    if (res.data) {
      this.meleeList = res.data;
    }
  }
}
