import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-matricula-result',
  templateUrl: './matricula-result.component.html',
  styleUrls: ['./matricula-result.component.scss']
})
export class MatriculaResultComponent {


  estudiante: Estudiantes[] = [];
  cursoid: any;
  jornadaid: any;
  anioid: any;

  constructor ( private matriculaService: MatriculaService, public vistas2:Vistas2Service ) {
  }


  ngOnInit(): void {
    this.matriculaService.getResultadosbuscarAllMatri().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
        this.cursoid = this.matriculaService.cursoid;
        this.jornadaid = this.matriculaService.jornadaid;
        this.anioid = this.matriculaService.anioid;
      }
    );
  }


  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}

