import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharsheetComponent } from './components/charsheet/charsheet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharsheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pnp-theheist-charactersheet';
}
