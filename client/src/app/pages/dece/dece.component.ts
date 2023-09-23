import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-dece',
  templateUrl: './dece.component.html',
  styleUrls: ['./dece.component.scss']
})
export class DeceComponent {

  constructor(public vistas2: Vistas2Service) {

  }

}
