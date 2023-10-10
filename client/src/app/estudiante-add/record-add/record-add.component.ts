import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { RecordService } from 'src/app/services/record-service/record.service';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.scss']
})
export class RecordAddComponent {


  record: Record[] =[];
  formrecord: FormGroup;

  constructor(private homeService: HomeService, private recordService: RecordService){

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


  calcularPromedio1() {
    const valores = this.formrecord.value;
    const suma = (
      parseFloat(valores.segundo) +
      parseFloat(valores.tercero) +
      parseFloat(valores.cuarto) +
      parseFloat(valores.quinto) +
      parseFloat(valores.sexto) +
      parseFloat(valores.septimo) +
      parseFloat(valores.octavo) +
      parseFloat(valores.noveno) +
      parseFloat(valores.decimo)
    );
    const promedio = ((suma / 9).toFixed(2));
    this.formrecord.patchValue({ promedio_basic: promedio });
    console.log(promedio);
  }

  calcularPromedio2() {
    const valores = this.formrecord.value;
    const suma = (
      parseFloat(valores.primero_bgu) +
      parseFloat(valores.segundo_bgu) +
      parseFloat(valores.tercero_bgu)
    );
    const promedio2 = ((suma / 3).toFixed(2));
    this.formrecord.patchValue({ promedio_bgu: promedio2 });
    console.log(promedio2);
  }

  ngOnInit() {

  }

  onSubmit() {
    this.calcularPromedio1();
    this.calcularPromedio2();
    const formValues = this.formrecord.value;

    const promedio = parseFloat(formValues.promedio_basic);
    if (!isNaN(promedio) && promedio !== 0) {
      this.recordService.postRecordEstudiante(formValues).subscribe(
        (response) => {
          this.homeService.openContenidoModal();
            this.formrecord.reset();
        },
      );
    } else {
      this.homeService.openContenidoModal2();
      console.error("Promedio inválido");
    }
  }

}
