import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';

@Component({
  selector: 'app-pdf-seguros',
  templateUrl: './pdf-seguros.component.html',
  styleUrls: ['./pdf-seguros.component.scss']
})
export class PdfSegurosComponent {

  estudiante: Estudiantes[] = [];
  fechaActual: any;

  anioActual: any;
  mesActual: any;
  diaActual: any;
  nombreMes: any;

  cursoid: any;
  jornadaid: any;
  anioid: any;

  matriculados = "";
  electromecanica = "";
  instalaciones = "";
  mecanizado = "";
  seguridad = "";
  soldadura = "";
  estadisticas = "";

  constructor(private matriculaService: MatriculaService, public vistas2: Vistas2Service) {

  }

  ngOnInit(): void {

    this.obtenerAnioActual();

    this.matriculaService.getResultadosbuscarAllMatri().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
        this.cursoid = this.matriculaService.cursoid;
        this.jornadaid = this.matriculaService.jornadaid;
        this.anioid = this.matriculaService.anioid;
      }
    );

    this.matriculaService.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.electromecanica = this.matriculaService.electromecanica;
      this.instalaciones = this.matriculaService.instalaciones;
      this.mecanizado = this.matriculaService.mecanizado;
      this.soldadura = this.matriculaService.soldadura;
      this.seguridad = this.matriculaService.seguridad;
      this.matriculados = this.matriculaService.matriculados;
    });
  }

  obtenerAnioActual() {
    const fechaActual = new Date();
    const nombresMeses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    this.anioActual = fechaActual.getFullYear();
    this.mesActual = fechaActual.getMonth();
    this.nombreMes = nombresMeses[this.mesActual];
    this.diaActual = fechaActual.getDate();
  }

  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}
