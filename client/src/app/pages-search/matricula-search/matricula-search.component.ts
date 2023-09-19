import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-matricula-search',
  templateUrl: './matricula-search.component.html',
  styleUrls: ['./matricula-search.component.scss']
})
export class MatriculaSearchComponent {


  estudiante: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor( private matriculaService: MatriculaService, public vistas:VistasService) {
    this.searchForm = new FormGroup({
      curso: new FormControl,
      jornada: new FormControl,
      anio_lectivo: new FormControl
    });
  }

  buscar2(): void {
    const curso = this.searchForm.get('curso')?.value;
    const jornada = this.searchForm.get('jornada')?.value;
    const anio_lectivo = this.searchForm.get('anio_lectivo')?.value;
    if (curso) {
      this.matriculaService.buscarAllMatri(curso, jornada, anio_lectivo);
      this.matriculaService.cursoid = this.searchForm.get('curso')?.value;
      this.matriculaService.jornadaid = this.searchForm.get('jornada')?.value;
      this.matriculaService.anioid = this.searchForm.get('anio_lectivo')?.value;
    }
  }

  mostrarComponente(numeroComponente: number) {
    this.vistas.mostrarComponente(numeroComponente);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente();
  }

  busquedas(){
    this.mostrarComponente(3);
    this.buscar2();
  }

}


