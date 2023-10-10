import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Record } from '../../models/record';
import { RecordService } from 'src/app/services/record-service/record.service';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-record-edit-dialog',
  templateUrl: './record-edit-dialog.component.html',
  styleUrls: ['./record-edit-dialog.component.scss']
})
export class RecordEditDialogComponent {

  formrecord: FormGroup;

  constructor( private recordService: RecordService, private homeService: HomeService,
    public dialogRef: MatDialogRef<RecordEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { record: Record }) {
      this.data.record.primero = this.data.record.primero || 0;
      this.data.record.segundo = this.data.record.segundo || 0;
      this.data.record.tercero = this.data.record.tercero || 0;
      this.data.record.cuarto = this.data.record.cuarto || 0;
      this.data.record.quinto = this.data.record.quinto || 0;
      this.data.record.sexto = this.data.record.sexto || 0;
      this.data.record.septimo = this.data.record.septimo || 0;
      this.data.record.octavo = this.data.record.octavo || 0;
      this.data.record.noveno = this.data.record.noveno || 0;
      this.data.record.decimo = this.data.record.decimo || 0;
      this.data.record.primero_bgu = this.data.record.primero_bgu || 0;
      this.data.record.segundo_bgu = this.data.record.segundo_bgu || 0;
      this.data.record.tercero_bgu = this.data.record.tercero_bgu || 0;

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
      observaciones: new FormControl(),
      cedulaEstudiante: new FormControl()
    })
  }

  promedio: any;
  promediobgu: any;

  calcularPromedio1() {
    const segundo = parseFloat(this.data.record.segundo.toString());
    const tercero = parseFloat(this.data.record.tercero.toString());
    const cuarto = parseFloat(this.data.record.cuarto.toString());
    const quinto = parseFloat(this.data.record.quinto.toString());
    const sexto = parseFloat(this.data.record.sexto.toString());
    const septimo = parseFloat(this.data.record.septimo.toString());
    const octavo = parseFloat(this.data.record.octavo.toString());
    const noveno = parseFloat(this.data.record.noveno.toString());
    const decimo = parseFloat(this.data.record.decimo.toString());

    const suma = segundo + tercero + cuarto + quinto + sexto + septimo + octavo + noveno + decimo;

    this.promedio = parseFloat((suma / 9).toFixed(2));
  }

  calcularPromedio2() {
    const quinto = parseFloat(this.data.record.quinto.toString());
    const sexto = parseFloat(this.data.record.sexto.toString());
    const septimo = parseFloat(this.data.record.septimo.toString());
    const octavo = parseFloat(this.data.record.octavo.toString());
    const noveno = parseFloat(this.data.record.noveno.toString());
    const decimo = parseFloat(this.data.record.decimo.toString());

    const suma = quinto + sexto + septimo + octavo + noveno + decimo;

    this.promedio = parseFloat((suma / 6).toFixed(2));
  }

  calcularPromedio3() {
    const primero = parseFloat(this.data.record.primero_bgu.toString());
    const segundo = parseFloat(this.data.record.segundo_bgu.toString());
    const tercero = parseFloat(this.data.record.tercero_bgu.toString());

    const suma = primero + segundo + tercero;

    this.promediobgu = parseFloat((suma / 3).toFixed(2));
  }


  ngOnInit(){
    this.calcularPromedio1();
    this.calcularPromedio3();
  }

  onSubmit() {
    const formValues = this.formrecord.value;
    this.recordService.updateRecordEstudiante(this.data.record.cedula, formValues).subscribe(
      (response) => {
        this.homeService.openContenidoModal();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );

  }


  onCancel(): void {
    this.dialogRef.close();
  }

  onButtonClick() {
    this.calcularPromedio3();
    this.onSubmit();

    setTimeout(() => {
      this.recordService.triggerButtonClick();
    }, 200)

    this.dialogRef.close(this.data.record);
  }

}
