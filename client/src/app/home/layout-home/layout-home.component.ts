import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { DeceService } from 'src/app/services/dece-service/dece.service';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent {

  constructor(private matriculaService: MatriculaService, private deceService: DeceService ){
  }

  onLabelClick() {
    this.matriculaService.emitLabelClickEvent();
  }

  onLabel2Click() {
    this.deceService.emitLabelClickEvent();
  }

}
