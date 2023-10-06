import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { Estudiantes } from 'src/app/models/estudiantes';
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

  mostrarDiv: boolean = false;
  formularioEnviado = false;
  formularioNoEnviado = false;

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

  onSubmit() {
    this.calcularPromedio1();
    this.calcularPromedio2();
    const id = this.homeService.cedulaid;
    const formValues = this.formrecord.value;

    const promedio = parseFloat(formValues.promedio_basic);
    if (!isNaN(promedio) && promedio !== 0) {
      this.recordService.updateRecordEstudiante(id, formValues).subscribe(
        (response) => {
          this.todasLasMatriculas();
        }
      );
    } else {
      console.error("Promedio inválido");
    }
  }

  mostrarContenidoModal() {
    this.homeService.openContenidoModal();
  }

}
