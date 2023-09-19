import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent {

  estudiante: Estudiantes[] = [];
  searchForm: FormGroup;

  constructor(private homeService: HomeService) {
    this.searchForm = new FormGroup({
      cedula: new FormControl,
    });
  }

  buscar(): void {
    const cedula = this.searchForm.get('cedula')?.value;
    if (cedula) {
      this.homeService.buscarPorCedula(cedula);
      this.homeService.cedulaid = this.searchForm.get('cedula')?.value;
    }
  }

  ngOnInit(): void {
    this.homeService.getResultadosbuscarPorCedula().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
      },
    );
  }

}

