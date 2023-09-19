import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { DeceService } from 'src/app/services/dece-service/dece.service';
import { RecordService } from 'src/app/services/record-service/record.service';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent {

  constructor(private recordService: RecordService , private deceService: DeceService ){
  }

  onLabelClick() {
    this.recordService.emitLabelClickEvent();
  }

  onLabel2Click() {
    this.deceService.emitLabelClickEvent();
  }

}
