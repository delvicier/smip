import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Record } from '../../models/record';
import { RecordService } from 'src/app/services/record-service/record.service';

@Component({
  selector: 'app-record-edit-dialog',
  templateUrl: './record-edit-dialog.component.html',
  styleUrls: ['./record-edit-dialog.component.scss']
})
export class RecordEditDialogComponent {

  record: Record[] =[];
  formrecord: FormGroup;
  idrecord: FormGroup;

  constructor( private recordService: RecordService,
    public dialogRef: MatDialogRef<RecordEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { record: Record }
  ) {
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
    this.idrecord = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      cedula: new FormControl(),
    })
  }

  ngOnInit() {
    this.recordService.getResultadosbuscarPorRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[];
      }
    );
  }

  onSubmit() {
    const formValues = this.formrecord.value;
    this.recordService.updateRecordEstudiante(this.data.record.cedula, formValues).subscribe();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
