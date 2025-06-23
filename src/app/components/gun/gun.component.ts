import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IGun } from '../../interfaces/IGun';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DiceService } from '../../services/dice-service/dice-service.service';
import { WeaponRemovedEvent } from '../../events/WeaponRemovedEvent';

@Component({
  selector: 'app-gun',
  standalone: true,
  imports: [FormsModule, ModalComponent, DropdownComponent],
  templateUrl: './gun.component.html',
  styleUrl: './gun.component.scss',
})
export class GunComponent implements AfterContentInit {
  @Input() gun!: IGun;

  @ViewChild('editModal') protected modal!: ModalComponent;
  @ViewChild('textarea') protected textarea!: ElementRef<HTMLTextAreaElement>;

  @Output() weaponRemovedEvent = new EventEmitter<WeaponRemovedEvent>();

  protected asJson: string = '';
  protected rows: number = 5;

  constructor(private diceService: DiceService) {}

  ngAfterContentInit(): void {
    this.asJson = JSON.stringify(this.gun, null, 2);
    this.rows = this.asJson.split(/\r\n|\r|\n/).length;
  }

  openModal() {
    this.textarea.nativeElement.value = this.asJson;
    this.modal.open();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.asJson);
    alert('In die Zwischenablage kopiert.');
  }

  save() {
    this.asJson = this.textarea.nativeElement.value;
    this.modal.close();
  }

  labelClicked(formula: string) {
    this.diceService.setDiceFormula(formula);
  }

  remove() {
    this.weaponRemovedEvent.emit(new WeaponRemovedEvent(this.gun));
    this.modal.close();
  }
}
