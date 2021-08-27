import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  
  nombre: string = 'Thor';
  edad: number = 23;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void {
    this.nombre= 'SpiderMan'
  }

  cambiarEdad():number {
    return this.edad = 22
  }


}
