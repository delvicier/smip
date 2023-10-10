import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-matricula-edit',
  templateUrl: './matricula-edit.component.html',
  styleUrls: ['./matricula-edit.component.scss']
})
export class MatriculaEditComponent {

  estudiante: Estudiantes[] =[];
  formulario: FormGroup;
  cedula: any;

  constructor ( private homeService: HomeService, private matriculaService: MatriculaService ) {
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


  ngOnInit() {

    this.matriculaService.getResultadosbuscarPorCedula().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
      }
    );
  }


  onSubmit() {
    const id = this.matriculaService.cedulaid;
    const formValues = this.formulario.value;

    this.matriculaService.updateMatriEstudiante(id, formValues).subscribe(
      (response) => {
        this.homeService.openContenidoModal();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );
  }

}
