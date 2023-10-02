import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-seguros',
  templateUrl: './pdf-seguros.component.html',
  styleUrls: ['./pdf-seguros.component.scss']
})
export class PdfSegurosComponent {

  estudiante: Estudiantes[] = [];
  estudiantes: Estudiantes[] = [];
  electromecanicaData: any[] = [];
  instalacionesData: any[] = [];
  mecanizadoData: any[] = [];
  seguridadData: any[] = [];
  soldaduraData: any[] = [];
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

  formatoEstilos = {
    'hoja-pdf': {
      'margin': '0',
      'padding': '0',
      'border': 'none',
      'background': 'transparent',
      'font-size': 'inherit',
      'font-family': 'inherit',
      'line-height': 'inherit',
      'color': 'inherit',
    },
    '.hoja': {
      'background-color': '#fff',
      'width': '210mm',
      'min-height': '297mm',
      'margin': '0 auto',
      'font-size': '12px',
      'box-sizing': 'border-box',
      'line-height': '1.5',
      'font-family': '"Times New Roman", Times, serif',
      'position': 'relative',
    },
    '.encabezado img' :{
      'margin': '30px 40px',
    },
    '.titulo1': {
      'margin': '10px 100px',
    },
    '.titulo1 .fecha': {
      'text-align': 'end',
    },
    '.parrafo1': {
      'margin': '10px 100px',
    },
    '.parrafo1 h1': {
      'color': '#202020',
      'font-size': '17px',
    },
    '.parrafo1 p': {
      'text-align': 'justify',
    },


    '.tableizer-table': {
      'font-size': '10px',
      'border': '1px solid #141414',
      'border-collapse': 'collapse',
      'width': '90px',
    },
    '.tcuerpo td': {
      'padding': '2px',
      'margin': '4px 2px',
      'border': '1px solid #141414',
      'text-align': 'center',
    },
    '.tcabezera th': {
      'background-color': '#ddebf7',
      'font-weight': 'bold',
      'padding': '4px',
      'margin': '4px',
      'border': '1px solid #141414',
      'text-align': 'center',
    },
    '.tcabezera2 th': {
      'background-color': '#92cddc',
      'font-weight': 'bold',
      'padding': '4px',
      'margin': '4px',
      'border': '1px solid #141414',
      'text-align': 'center',
    },
    '.tableizer-table2': {
      'font-size': '9px',
      'border': '1px solid #141414',
      'border-collapse': 'collapse',
    },
    '.tcuerpo2 td': {
      'background-color': '#92cddc',
      'padding': '2px',
      'margin': '2px',
      'border': '1px solid #141414',
      'text-align': 'center',
    },
    'footer': {
      'position': 'absolute',
      'bottom': '0',
      'left': '0',
    },
    'footer .pie-pagina': {
      'text-align': 'center',
      'max-width': '208mm',
    },
    'footer .pie-pagina img': {
      'max-width': '208mm',
      'object-fit': 'contain',
    },
    '.titulo-foto img': {
      'margin-top': '10px',
      'margin-bottom': '10px',
      'margin-left': '10px',
    },
    '.footer-firmas': {
      'display': 'grid',
      'grid-template-columns': '1fr 1fr',
      'text-align': 'center',
      'margin': '0px 80px',
    },
  };

  constructor(private matriculaService: MatriculaService, public vistas2: Vistas2Service) {

  }

  ngOnInit(): void {

    this.obtenerAnioActual();

    this.matriculaService.getResultadosbuscarAllMatri().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
        this.ordenarEstudiantes();
        this.calcularEdades();
        this.cursoid = this.matriculaService.cursoid;
        this.jornadaid = this.matriculaService.jornadaid;
        this.anioid = this.matriculaService.anioid;
        this.organizarPorEspecialidad();

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

  organizarPorEspecialidad() {
    if (this.estudiante && this.estudiante.length > 0) {
      this.estudiante.forEach(item => {
        if (item && item.especialidad) {
          const especialidad = item.especialidad.toUpperCase();
          switch (true) {
            case especialidad.includes('ELECTROMECANICA'):
              this.electromecanicaData.push(item);
              break;
            case especialidad.includes('INSTALACIONES'):
              this.instalacionesData.push(item);
              break;
            case especialidad.includes('MECANIZADO'):
              this.mecanizadoData.push(item);
              break;
              case especialidad.includes('SEGURIDAD'):
                this.seguridadData.push(item);
                break;
              case especialidad.includes('SOLDADURA'):
                this.soldaduraData.push(item);
                break;
          }
        }
      });
    }
    console.log('ELECTROMECANICA:', this.electromecanicaData);
    console.log('INSTALACIONES:', this.instalacionesData);
    console.log('MECANIZADO:', this.mecanizadoData);
  }

  calcularEdades() {
    const fechaActual = new Date();

    this.estudiante.forEach(estudiante => {
      const fechaNacimientoString = estudiante.nacimiento;
      if (!fechaNacimientoString) {
        estudiante.nacimiento = 'Fecha desconocida';
        return;
      }

      const fechaNacimiento = new Date(fechaNacimientoString);
      if (isNaN(fechaNacimiento.getTime())) {
        estudiante.nacimiento = 'Fecha inválida';
        return;
      }

      const edadMilisegundos = fechaActual.getTime() - fechaNacimiento.getTime();
      const edadAnios = Math.floor(edadMilisegundos / (365 * 24 * 60 * 60 * 1000));

      estudiante.edad = edadAnios.toString();
    });
  }


  ordenarEstudiantes() {
    function compararEspecialidad(a: Estudiantes, b: Estudiantes) {
      const prioridad: { [letra: string]: number } = { 'e': 1, 'i': 2, 'm': 3, 's': 4 };

      const especialidadA = (a.especialidad || '').toLowerCase();
      const especialidadB = (b.especialidad || '').toLowerCase();

      const prioridadA = prioridad[especialidadA[0]] || 0;
      const prioridadB = prioridad[especialidadB[0]] || 0;

      if (prioridadA !== prioridadB) {
        return prioridadA - prioridadB;
      }

      if (especialidadA < especialidadB) {
        return -1;
      }
      if (especialidadA > especialidadB) {
        return 1;
      }
      return 0;
    }

    this.estudiante.sort(compararEspecialidad);
  }


  convertirPDF() {
    const div1 = document.getElementById('hoja1-dece');
    const div2 = document.getElementById('hoja2-dece');
    const div3 = document.getElementById('hoja3-dece');
    const div4 = document.getElementById('hoja4-dece');

    if (div1 && div2 && div3 && div4) {
      // Captura el contenido del primer div en un canvas
      html2canvas(div1, { scale: 2 }).then((canvas1) => {
        // Captura el contenido del segundo div en un canvas
        html2canvas(div2, { scale: 2 }).then((canvas2) => {

          html2canvas(div3, { scale: 2 }).then((canvas3) => {

            html2canvas(div4, { scale: 2 }).then((canvas4) => {
              // Crea un objeto jsPDF con orientación 'p' (vertical) y unidad 'mm'
              const pdf = new jsPDF('p', 'mm', 'a4');

              // Convierte los canvas en imágenes y agrega al PDF
              const imgData1 = canvas1.toDataURL('image/png');
              const imgData2 = canvas2.toDataURL('image/png');
              const imgData3 = canvas3.toDataURL('image/png');
              const imgData4 = canvas4.toDataURL('image/png');

              pdf.addImage(imgData1, 'PNG', 0, 0, 210, 297);
              pdf.addPage();
              pdf.addImage(imgData2, 'PNG', 0, 0, 210, 297);
              pdf.addPage();
              pdf.addImage(imgData3, 'PNG', 0, 0, 210, 297);
              pdf.addPage();
              pdf.addImage(imgData4, 'PNG', 0, 0, 210, 297);

              // Guarda o muestra el PDF, según tus necesidades
              pdf.save('dece.pdf');
            });
          });
        });
      });
    } else {
      console.error('No se encontro el pdf');
    }
  }

  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}
