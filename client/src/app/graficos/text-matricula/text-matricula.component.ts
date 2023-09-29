import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';

@Component({
  selector: 'app-text-matricula',
  templateUrl: './text-matricula.component.html',
  styleUrls: ['./text-matricula.component.scss']
})
export class TextMatriculaComponent {

  matriculadosatras = "";
  matriculados = "";
  estadisticas = "";

  constructor(private matriculaServicio: MatriculaService) {
  }

  ngOnInit(): void {
    this.matriculaServicio.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.matriculados = this.matriculaServicio.matriculados;
      this.matriculadosatras = this.matriculaServicio.matriculadosatras;
    });
  }
}

