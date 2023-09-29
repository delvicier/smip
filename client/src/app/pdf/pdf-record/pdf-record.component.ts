import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { RecordService } from 'src/app/services/record-service/record.service';


@Component({
  selector: 'app-pdf-record',
  templateUrl: './pdf-record.component.html',
  styleUrls: ['./pdf-record.component.scss']
})
export class PdfRecordComponent {

  estudiante: Estudiantes[] = [];
  record: Record[] =[];
  formrecord: FormGroup;

  cursoid: any;
  jornadaid: any;
  anioid: any;
  especialidad: any;

  constructor( private matriculaService: MatriculaService, private recordService: RecordService, public vistas2: Vistas2Service){

    this.formrecord = new FormGroup({
      primero: new FormControl(),
      segundo: new FormControl(),
      tercero: new FormControl(),
      cuarto: new FormControl(),
      quinto: new FormControl(),
      sexto: new FormControl(),
      septimo: new FormControl(),
      octavo: new FormControl(),
      noveno: new FormControl(),
      decimo: new FormControl(),
      promedio_basic: new FormControl(),
      primero_bgu: new FormControl(),
      segundo_bgu: new FormControl(),
      tercero_bgu: new FormControl(),
      promedio_bgu: new FormControl(),
      proyecto: new FormControl(),
      participacion: new FormControl(),
      observaciones: new FormControl()
    })
  }


  ngOnInit() {
    this.recordService.getResultadosbuscarAllRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[];

        this.cursoid = this.recordService.cursoid;
        this.jornadaid = this.recordService.jornadaid;
        this.anioid = this.recordService.anioid;
      }
    );

    this.matriculaService.buscarAllMatri(this.cursoid, this.jornadaid, this.anioid);
    this.matriculaService.getResultadosbuscarAllMatri().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];

        if (this.estudiante.length > 0) {
          this.especialidad = this.estudiante[0].especialidad;
        }
      }
    );
  }

  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}


