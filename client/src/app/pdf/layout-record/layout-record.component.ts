import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { RecordService } from 'src/app/services/record-service/record.service';
import { HomeService } from 'src/app/services/home-service/home.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout-record',
  templateUrl: './layout-record.component.html',
  styleUrls: ['./layout-record.component.scss']
})
export class LayoutRecordComponent {


  estudiante: Estudiantes[] =[];
  record: Record[] =[];
  formrecord: FormGroup;

  constructor(private homeService: HomeService, private recordService: RecordService ){


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

  id = this.homeService.cedulaid;

  ngOnInit() {
    this.recordService.labelClickEvent.subscribe(() => {
      this.todasLasMatriculas();
    });
  }

  todasLasMatriculas() {
    const id = this.homeService.cedulaid;
    if (id) {
      this.recordService.getRecordEstudiante(id).subscribe(
        response => {
          this.record = response;
        }
      );
    }
  }

  onSubmit() {
    const id = this.homeService.cedulaid;
    const formValues = this.formrecord.value;

    this.recordService.updateRecordEstudiante(id, formValues).subscribe(
      (response) => {
        console.log('Nota actualizada:', response);
      },
      (error) => {
        console.error('Error al actualizar:', error);
      }
    );
  }


}

