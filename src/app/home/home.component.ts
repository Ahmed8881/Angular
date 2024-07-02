import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: ` 
  
  <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
