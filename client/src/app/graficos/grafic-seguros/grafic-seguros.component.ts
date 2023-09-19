import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-grafic-seguros',
  templateUrl: './grafic-seguros.component.html',
  styleUrls: ['./grafic-seguros.component.scss']
})
export class GraficSegurosComponent {


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
  public pieChartLabels = [ [ 'ELECTROMECANICA' ],[ 'INSTALACIONES' ], [ 'MECANIZADO' ],[ 'SEGURIDAD' ], [ 'SOLDADURA' ]  ];
  public pieChartDatasets = [ {
    data: [ '' ],
    borderColor: [''],
    backgroundColor: [''],
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  actualizarGraficos(){
    this.pieChartDatasets = [ {
      data: [ this.matriculaServicio.electromecanica, this.matriculaServicio.instalaciones, this.matriculaServicio.mecanizado, this.matriculaServicio.seguridad, this.matriculaServicio.soldadura ],
      borderColor: ['#2ea2e2','#2ea2e2'],
      backgroundColor: ['#2288d1','#2f5492','#296baf','#28508b','#264981'],
    } ];
  }

}

