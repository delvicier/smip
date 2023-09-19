import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-record-btn',
  templateUrl: './record-btn.component.html',
  styleUrls: ['./record-btn.component.scss']
})
export class RecordBtnComponent {

  constructor(public vistas: VistasService) {

  }

  mostrarComponente(numeroComponente3: number) {
    this.vistas.mostrarComponente3(numeroComponente3);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente3();
  }
}

