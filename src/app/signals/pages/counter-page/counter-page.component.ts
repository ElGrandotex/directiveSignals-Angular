import { Component, computed, signal } from '@angular/core';

const name = signal('Jose');

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);

  // Propiedad de solo lectura
  // no se puede modificar con set o update
  public squareCOunter = computed( () => this.counter() * this.counter())

  constructor(){
    console.log(name());
  }

  increseaseBy(value: number){
    // Una forma
    // this.counter.set( this.counter() + value);

    // MEJOR FORMA
    this.counter.update(current => current + value)
  }
}
