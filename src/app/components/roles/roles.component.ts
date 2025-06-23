import { Component, Input } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { IRole } from '../../interfaces/IRole';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RoleComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent {
  @Input() roles!: IRole[];
}
