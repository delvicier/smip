import { Component } from '@angular/core';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-dece',
  templateUrl: './dece.component.html',
  styleUrls: ['./dece.component.scss']
})
export class DeceComponent {

  constructor(public vistas: VistasService) {

  }

}
