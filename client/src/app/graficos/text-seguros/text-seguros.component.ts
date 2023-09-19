import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-text-seguros',
  templateUrl: './text-seguros.component.html',
  styleUrls: ['./text-seguros.component.scss']
})
export class TextSegurosComponent {


  matriculados = "";
  electromecanica = "";
  instalaciones = "";
  mecanizado = "";
  seguridad = "";
  soldadura = "";
  estadisticas = "";

  constructor(private matriculaServicio: MatriculaService) {
  }

  ngOnInit(): void {
    this.matriculaServicio.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.electromecanica = this.matriculaServicio.hombres;
      this.instalaciones = this.matriculaServicio.mujeres;
      this.mecanizado = this.matriculaServicio.hombres;
      this.soldadura = this.matriculaServicio.mujeres;
      this.estadisticas = this.matriculaServicio.hombres;
      this.matriculados = this.matriculaServicio.matriculados;
    });
  }
}

