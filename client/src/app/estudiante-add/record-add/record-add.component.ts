import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { RecordService } from 'src/app/services/record-service/record.service';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.scss']
})
export class RecordAddComponent {


  record: Record[] =[];
  formrecord: FormGroup;

  constructor(private recordService: RecordService){

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
      observaciones: new FormControl(),
      cedulaEstudiante: new FormControl()
    })
  }

  ngOnInit() {

  }

  onSubmit() {
    const formValues = this.formrecord.value;

    this.recordService.postRecordEstudiante(formValues).subscribe(
      (response) => {
        console.log('Nota creada:', response);
        this.formrecord.reset();
      },
    );
  }

}
