import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {

  estudiantes: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor(private matriculaServicio: MatriculaService, public vistas2: Vistas2Service) {

    this.searchForm = new FormGroup({
      anio_lectivo: new FormControl
    });
  }

  matriculadosAño = 0;
  matriculadosAñoAtras = 0;
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

  matriculaNum2 (){
    const toStringMatri: string = this.matriculadosAñoAtras.toString();
    this.matriculaServicio.matriculadosatras = toStringMatri;
    this.matriculaServicio.actualizarValor2(toStringMatri);
    this.matriculaServicio.matriculadosatras = this.matriculadosAñoAtras;
  }

  anio: any;
  anioActual: any;

  obtenerAnioActual() {
    const fechaActual = new Date();
    this.anioActual = fechaActual.getFullYear();
  }

  enviar(){
    const anio = this.searchForm.get('anio_lectivo')?.value || this.anioActual;

    this.matriculaServicio.getEstadisticas(anio).subscribe(
    (response) => {
      this.estudiantes = response;
      this.matriculadosAño = response.length;

      this.matriculaNum ();

        this.hombres = 0;
        for (const obj of response) {
          const genero = obj.genero;
          if (genero && genero.toLowerCase() === "hombre") {
            this.hombres++;
          }
        }

        const toStringHombres: string = this.hombres.toString();
        this.matriculaServicio.hombres = toStringHombres;
        this.matriculaServicio.actualizarValor(toStringHombres);

        this.mujeres = 0;
        for (const obj of response) {
          const genero = obj.genero;
          if (genero && genero.toLowerCase() === "mujer") {
            this.mujeres++;
          }
        }

        const toStringMujeres: string = this.mujeres.toString();
        this.matriculaServicio.mujeres = toStringMujeres;
        this.matriculaServicio.actualizarValor(toStringMujeres);

        this.electromecanica = 0;
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

        this.instalaciones = 0;
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

        this.mecanizado = 0;
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

        this.seguridad = 0;
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

        this.soldadura = 0;
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

  enviar2(){
    const curso = this.searchForm.get('anio_lectivo')?.value || this.anioActual;
    if(curso){
      this.anio = curso -1;

      this.matriculaServicio.getEstadisticas(this.anio).subscribe(
        (response) => {
          this.matriculadosAñoAtras = response.length;
          this.matriculaNum2 ();
      });
    }
  }

  enviar3(){
    this.obtenerAnioActual();
    this.enviar();
    this.enviar2();
  }

  ngOnInit() {
    this.enviar3();
  }

  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}
