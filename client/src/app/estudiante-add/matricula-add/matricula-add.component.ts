import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-matricula-add',
  templateUrl: './matricula-add.component.html',
  styleUrls: ['./matricula-add.component.scss']
})
export class MatriculaAddComponent {

  estudiantesm: Estudiantes[] = [];
  formulario: FormGroup;

  constructor(private matriculaService: MatriculaService) {
    this.formulario = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      cedula: new FormControl(),
      nacimiento: new FormControl(),
      genero: new FormControl(),
      discapacidad: new FormControl(),
      disca_porcentaje: new FormControl(),
      ciudad_naci: new FormControl(),
      etnia: new FormControl(),
      provincia: new FormControl(),
      canton: new FormControl(),
      parroquia: new FormControl(),
      direccion_detallada: new FormControl(),
      nombres_repre: new FormControl(),
      apellidos_repre: new FormControl(),
      cedula_repre: new FormControl(),
      telefono: new FormControl(),
      celular: new FormControl(),
      parentesco: new FormControl(),
      curso: new FormControl(),
      jornada: new FormControl(),
      anio_lectivo: new FormControl(),
      fecha_matri: new FormControl(),
      especialidad: new FormControl()
    })
  }

  onSubmitMatri() {
    const formValues = this.formulario.value;
    this.matriculaService.postMatriEstudiante(formValues).subscribe(
      (response) => {
        console.log('Matrícula exitosa:', response);
        this.formulario.reset();
      }
    );
  }

  recargarPagina() {
    window.location.reload();
  }

}

