import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IMelee } from '../../interfaces/IMelee';
import { ModalComponent } from '../modal/modal.component';
import { DiceService } from '../../services/dice-service/dice-service.service';
import { WeaponRemovedEvent } from '../../events/WeaponRemovedEvent';

@Component({
  selector: 'app-melee',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './melee.component.html',
  styleUrl: './melee.component.scss',
})
export class MeleeComponent implements AfterContentInit {
  @Input() melee!: IMelee;

  @ViewChild('editModal') protected modal!: ModalComponent;
  @ViewChild('textarea') protected textarea!: ElementRef<HTMLTextAreaElement>;

  @Output() weaponRemovedEvent = new EventEmitter<WeaponRemovedEvent>();

  protected asJson: string = '';
  protected rows: number = 5;

  constructor(private diceService: DiceService) {}

  ngAfterContentInit(): void {
    this.asJson = JSON.stringify(this.melee, null, 2);
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
    this.weaponRemovedEvent.emit(new WeaponRemovedEvent(this.melee));
    this.modal.close();
  }
}
