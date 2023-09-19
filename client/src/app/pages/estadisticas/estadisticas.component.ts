import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {

  estudiantes: Estudiantes[] = [];

  constructor(private matriculaServicio: MatriculaService) {

  }
  componente2 = this.matriculaServicio.numero2;

  matriculadosAño = 0;
  hombres = 0;
  mujeres = 0;
  electromecanica = 0;
  instalaciones = 0;
  mecanizado = 0;
  seguridad = 0;
  soldadura = 0;

  matriculaNum (){
    const toStringMatri: string = this.matriculadosAño.toString();
    this.matriculaServicio.matriculados = toStringMatri;
    this.matriculaServicio.actualizarValor(toStringMatri);
    this.matriculaServicio.matriculados = this.matriculadosAño;
  }

  ngOnInit() {

    this.matriculaServicio.getAllMatriEstudiantes().subscribe(response => {
      this.estudiantes = response;
      this.matriculadosAño = response.length;
      this.matriculaNum ();

      for (const obj of response) {
        const genero = obj.genero;
        if (genero && genero.toLowerCase() === "hombre") {
          this.hombres++;
        }
      }

      const toStringHombres: string = this.hombres.toString();
      this.matriculaServicio.hombres = toStringHombres;
      this.matriculaServicio.actualizarValor(toStringHombres);

      for (const obj of response) {
        const genero = obj.genero;
        if (genero && genero.toLowerCase() === "mujer") {
          this.mujeres++;
        }
      }

      const toStringMujeres: string = this.mujeres.toString();
      this.matriculaServicio.mujeres = toStringMujeres;
      this.matriculaServicio.actualizarValor(toStringMujeres);

      for (const obj of response) {
        const especialidad1 = obj.especialidad;
        const regex = /electromecanica/i; // 'i' hace que la búsqueda sea insensible a mayúsculas/minúsculas

        if (especialidad1 && regex.test(especialidad1)) {
          this.electromecanica++;
        }
      }

      const toStringElectromecanica: string = this.electromecanica.toString();
      this.matriculaServicio.electromecanica = toStringElectromecanica;
      this.matriculaServicio.actualizarValor(toStringElectromecanica);


      for (const obj of response) {
        const especialidad2 = obj.especialidad;
        const regex = /instalaciones/i; // 'i' hace que la búsqueda sea insensible a mayúsculas/minúsculas

        if (especialidad2 && regex.test(especialidad2)) {
          this.instalaciones++;
        }
      }

      const toStringInstalaciones: string = this.instalaciones.toString();
      this.matriculaServicio.instalaciones = toStringInstalaciones;
      this.matriculaServicio.actualizarValor(toStringInstalaciones);


      for (const obj of response) {
        const especialidad3 = obj.especialidad;
        const regex = /mecanizado/i;

        if (especialidad3 && regex.test(especialidad3)) {
          this.mecanizado++;
        }
      }

      const toStringMecanizado: string = this.mecanizado.toString();
      this.matriculaServicio.mecanizado = toStringMecanizado;
      this.matriculaServicio.actualizarValor(toStringMecanizado);


      for (const obj of response) {
        const especialidad4 = obj.especialidad;
        const regex = /seguridad/i;

        if (especialidad4 && regex.test(especialidad4)) {
          this.seguridad++;
        }
      }

      const toStringSeguridad: string = this.seguridad.toString();
      this.matriculaServicio.seguridad = toStringSeguridad;
      this.matriculaServicio.actualizarValor(toStringSeguridad);


      for (const obj of response) {
        const especialidad5 = obj.especialidad;
        const regex = /soldadura/i;

        if (especialidad5 && regex.test(especialidad5)) {
          this.soldadura++;
        }
      }

      const toStringsoldadura: string = this.soldadura.toString();
      this.matriculaServicio.soldadura = toStringsoldadura;
      this.matriculaServicio.actualizarValor(toStringsoldadura);

    });

  }

  mostrarComponente2(numero2: number) {
    this.matriculaServicio.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.matriculaServicio.ocultarComponente2();
  }


}
