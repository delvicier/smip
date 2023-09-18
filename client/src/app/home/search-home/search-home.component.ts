import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent {


  estudiante: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor(private matriculaService: MatriculaService) {
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
      },
    );

  }

}

