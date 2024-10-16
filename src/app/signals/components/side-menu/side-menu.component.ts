import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  //DE FORMA TRADICIONAL
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', router: 'counter'},
  //   { title: 'Usuario', router: 'user-info'},
  //   { title: 'Propiedades', router: 'properties'},
  // ];

  //COMO SEñAL
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'Usuario', router: 'user-info' },
    { title: 'Propiedades', router: 'properties' },
  ]);

}
