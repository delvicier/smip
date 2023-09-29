import { Component } from '@angular/core';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss'],
})
export class SegurosComponent {

  constructor(public vistas2: Vistas2Service) {

  }

}
