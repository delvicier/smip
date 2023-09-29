import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-matricula2',
  templateUrl: './text-matricula2.component.html',
  styleUrls: ['./text-matricula2.component.scss']
})
export class TextMatricula2Component {

  estudiantes: Estudiantes[] = [];
  searchForm: FormGroup;
  matriculadosAño = 0;
  matriculadosAñoAtras = 0;

  matriculadosatras = "";
  matriculados = "";
  estadisticas = "";

  constructor(private matriculaServicio: MatriculaService) {
    this.searchForm = new FormGroup({
      anio_lectivo: new FormControl
    });
  }

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
    const curso = this.searchForm.get('anio_lectivo')?.value || this.anioActual;

    this.matriculaServicio.getEstadisticas(curso).subscribe(
    (response) => {
      this.estudiantes = response;
      this.matriculadosAño = response.length;

      this.matriculaNum ();

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


  ngOnInit(): void {
    this.enviar3();

    this.matriculaServicio.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.matriculados = this.matriculaServicio.matriculados;
      this.matriculadosatras = this.matriculaServicio.matriculadosatras;
    });

  }
}

