import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafic-genero',
  templateUrl: './grafic-genero.component.html',
  styleUrls: ['./grafic-genero.component.scss']
})
export class GraficGeneroComponent {


  estadisticas = "";

  constructor(private matriculaServicio: MatriculaService) {
  }

  ngOnInit(): void {
    this.matriculaServicio.estadisticas$.subscribe(valor => {
      this.estadisticas = valor;
      this.actualizarGraficos();
    });
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        }
      }
    }
  };
  public pieChartLabels = [ [ 'Hombres' ],[ 'Mujeres' ] ];
  public pieChartDatasets = [ {
    data: [ '' ],
    borderColor: [''],
    backgroundColor: [''],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  actualizarGraficos(){
    this.pieChartDatasets = [ {
      data: [ this.matriculaServicio.hombres, this.matriculaServicio.mujeres ],
      borderColor: ['#2ea2e2','#2ea2e2'],
      backgroundColor: ['#0288d1','#2f5492','#296baf','#28508b','#264981'],
    } ];
  }

}

