import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-dece-btn',
  templateUrl: './dece-btn.component.html',
  styleUrls: ['./dece-btn.component.scss']
})
export class DeceBtnComponent {

  constructor(public vistas2: Vistas2Service) {

  }

  mostrarComponente(numeroComponente2: number) {
    this.vistas2.mostrarComponente2(numeroComponente2);
  }

  ocultarComponente() {
    this.vistas2.ocultarComponente2();
  }
}

