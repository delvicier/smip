import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-text-genero',
  templateUrl: './text-genero.component.html',
  styleUrls: ['./text-genero.component.scss']
})
export class TextGeneroComponent {


  hombres = "";
  mujeres = "";
  matriculados = "";
  estadisticas = "";

  constructor(private matriculaServicio: MatriculaService) {
  }

  ngOnInit(): void {
    this.matriculaServicio.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.hombres = this.matriculaServicio.hombres;
      this.mujeres = this.matriculaServicio.mujeres;
      this.matriculados = this.matriculaServicio.matriculados;
    });
  }

}

