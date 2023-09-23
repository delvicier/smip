import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-seguros-btn',
  templateUrl: './seguros-btn.component.html',
  styleUrls: ['./seguros-btn.component.scss']
})
export class SegurosBtnComponent {

  constructor(public vistas2: Vistas2Service) {

  }

  mostrarComponente(numeroComponente4: number) {
    this.vistas2.mostrarComponente4(numeroComponente4);
  }

  ocultarComponente() {
    this.vistas2.ocultarComponente4();
  }
}
