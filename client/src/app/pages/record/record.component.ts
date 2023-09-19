import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {

  constructor(public vistas: VistasService) {

  }

}
