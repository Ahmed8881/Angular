import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { Housinglocation } from '../housinglocation/housinglocation';
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
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housinglocations:Housinglocation={
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

}
