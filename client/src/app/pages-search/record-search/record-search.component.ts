import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { RecordService } from 'src/app/services/record-service/record.service';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-record-search',
  templateUrl: './record-search.component.html',
  styleUrls: ['./record-search.component.scss']
})
export class RecordSearchComponent {


  record: Record[] =[];
  searchForm: FormGroup;

  constructor( private recordService:RecordService, public vistas: VistasService ) {
    this.searchForm = new FormGroup({
      curso: new FormControl,
      jornada: new FormControl,
      anio_lectivo: new FormControl
    });
  }

  buscar2(): void {
    const curso = this.searchForm.get('curso')?.value;
    const jornada = this.searchForm.get('jornada')?.value;
    const anio_lectivo = this.searchForm.get('anio_lectivo')?.value;
    if (curso) {
      this.recordService.buscarAllRecord(curso, jornada, anio_lectivo);
      this.recordService.cursoid = this.searchForm.get('curso')?.value;
      this.recordService.jornadaid = this.searchForm.get('jornada')?.value;
      this.recordService.anioid = this.searchForm.get('anio_lectivo')?.value;
    }
  }

  mostrarComponente(numeroComponente3: number) {
    this.vistas.mostrarComponente3(numeroComponente3);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente3();
  }

  busquedas(){
    this.mostrarComponente(3);
    this.buscar2();
  }

}

