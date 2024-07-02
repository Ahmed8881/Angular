import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Default</h1>
  <p>cl</p> `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
