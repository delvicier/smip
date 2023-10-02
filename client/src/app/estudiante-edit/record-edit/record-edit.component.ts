import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';
import { RecordService } from 'src/app/services/record-service/record.service';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.scss']
})
export class RecordEditComponent {

  record: Record[] =[];
  formrecord: FormGroup;

  constructor(private recordService: RecordService, public vistas2: Vistas2Service){

    this.formrecord = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      cedula: new FormControl(),
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
    this.recordService.getResultadosbuscarPorRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[];
      }
    );
  }

  todasLasMatriculas() {
    const id = this.recordService.cedulaid;

    if (id) {
      this.recordService.getRecordEstudiante(id).subscribe(
        response => {
          this.record = response;
        }
      );
    }
  }

  onSubmit() {
    const id = this.recordService.recordid;
    const formValues = this.formrecord.value;

    this.recordService.updateRecordEstudiante(id, formValues).subscribe();
  }


}

