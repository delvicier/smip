import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-matricula2-search',
  templateUrl: './matricula2-search.component.html',
  styleUrls: ['./matricula2-search.component.scss']
})
export class Matricula2SearchComponent {


  estudiante: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor( private matriculaService: MatriculaService, public vistas2: Vistas2Service) {
    this.searchForm = new FormGroup({
      cedula: new FormControl,
    });
  }

  buscar(): void {
    const cedula = this.searchForm.get('cedula')?.value;
    if (cedula) {
      this.matriculaService.buscarPorCedula(cedula);
      this.matriculaService.cedulaid = this.searchForm.get('cedula')?.value;
    }
  }

  ngOnInit(): void {
    this.matriculaService.getResultadosbuscarPorCedula().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];

      }

    );
  }

  mostrarComponente(numeroComponente: number) {
    this.vistas2.mostrarComponente(numeroComponente);
  }

  ocultarComponente() {
    this.vistas2.ocultarComponente();
  }

  reloadPage(): void {
    location.reload();
  }

  busquedas(){
    this.mostrarComponente(4);
  }

}


