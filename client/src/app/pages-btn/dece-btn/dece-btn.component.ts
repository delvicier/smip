import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-dece-btn',
  templateUrl: './dece-btn.component.html',
  styleUrls: ['./dece-btn.component.scss']
})
export class DeceBtnComponent {

  constructor(public vistas: VistasService) {

  }

  mostrarComponente(numeroComponente2: number) {
    this.vistas.mostrarComponente2(numeroComponente2);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente2();
  }
}

