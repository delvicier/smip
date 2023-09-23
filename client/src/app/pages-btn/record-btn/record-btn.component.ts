import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-record-btn',
  templateUrl: './record-btn.component.html',
  styleUrls: ['./record-btn.component.scss']
})
export class RecordBtnComponent {

  constructor(public vistas2: Vistas2Service) {

  }

  mostrarComponente(numeroComponente3: number) {
    this.vistas2.mostrarComponente3(numeroComponente3);
  }

  ocultarComponente() {
    this.vistas2.ocultarComponente3();
  }
}

