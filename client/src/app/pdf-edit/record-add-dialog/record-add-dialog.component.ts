import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Record } from '../../models/record';
import { RecordService } from 'src/app/services/record-service/record.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-record-add-dialog',
  templateUrl: './record-add-dialog.component.html',
  styleUrls: ['./record-add-dialog.component.scss']
})
export class RecordAddDialogComponent {

  record: Record[] =[];
  formrecord: FormGroup;

  constructor( private recordService: RecordService,
    public dialogRef: MatDialogRef<RecordAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { record: Record }, public vistas2: Vistas2Service
  ) {

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
    this.recordService.getResultadosbuscarPorRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[];
      }
    );
  }

  onSubmit() {
    const formValues = this.formrecord.value;
    this.recordService.postRecordEstudiante(formValues).subscribe();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onButtonClick() {
    this.onSubmit();
    this.recordService.triggerButtonClick();
    this.dialogRef.close(this.data.record);
    this.recordService.triggerButtonClick();
  }

}
