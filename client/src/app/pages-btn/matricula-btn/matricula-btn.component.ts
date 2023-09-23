import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-matricula-btn',
  templateUrl: './matricula-btn.component.html',
  styleUrls: ['./matricula-btn.component.scss']
})
export class MatriculaBtnComponent {

  constructor(public vistas2: Vistas2Service) {

  }

  mostrarComponente(numeroComponente: number) {
    this.vistas2.mostrarComponente(numeroComponente);
  }

  ocultarComponente() {
    this.vistas2.ocultarComponente();
  }

}

