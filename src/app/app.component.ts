import { Component, inject, NgZone } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    (globalThis as any).ngZone = inject(NgZone);
  }
}
