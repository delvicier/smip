import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-seguros-btn',
  templateUrl: './seguros-btn.component.html',
  styleUrls: ['./seguros-btn.component.scss']
})
export class SegurosBtnComponent {

  constructor(public vistas: VistasService) {

  }

  mostrarComponente(numeroComponente4: number) {
    this.vistas.mostrarComponente4(numeroComponente4);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente4();
  }
}
