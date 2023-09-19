import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-matricula-btn',
  templateUrl: './matricula-btn.component.html',
  styleUrls: ['./matricula-btn.component.scss']
})
export class MatriculaBtnComponent {

  constructor(public vistas: VistasService) {

  }

  mostrarComponente(numeroComponente: number) {
    this.vistas.mostrarComponente(numeroComponente);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente();
  }
  
}

