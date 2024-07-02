import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  template: ` 
  
  <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housinglocation></app-housinglocation>
    </section>

    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
