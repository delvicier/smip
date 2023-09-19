import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-seguros-search',
  templateUrl: './seguros-search.component.html',
  styleUrls: ['./seguros-search.component.scss']
})
export class SegurosSearchComponent {

  estudiante: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor( private matriculaService: MatriculaService, public vistas: VistasService) {
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

  mostrarComponente(numeroComponente4: number) {
    this.vistas.mostrarComponente4(numeroComponente4);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente4();
  }

  busquedas(){
    this.mostrarComponente(3);
    this.buscar2();
  }

}


