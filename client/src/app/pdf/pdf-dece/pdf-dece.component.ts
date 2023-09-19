import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { DeceService } from 'src/app/services/dece-service/dece.service';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-pdf-dece',
  templateUrl: './pdf-dece.component.html',
  styleUrls: ['./pdf-dece.component.scss']
})
export class PdfDeceComponent {

  pdf = new jsPDF();
  vistapdf = 'estiloformulario';
  cambiarvista = this.deceService.numero;

  hoja1: DeceHoja1[] =[];
  hoja2: DeceHoja2[] =[];
  hoja3: DeceHoja3[] =[];
  hoja4: DeceHoja4[] =[];

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
      'height': '297mm',
      'margin': '0 auto',
      'padding': '0px',
      'font-size': '16px',
      'border': 'none',
      'background': 'transparent',
      'color': 'inherit',
      'font-family': '"Times New Roman", Times, serif',
    },
    '.parentesco' :{
      'display': 'grid',
      'grid-template-columns': '1fr 1fr 1fr 1fr 1fr 1fr',
      'grid-template-rows': '20px 20px',
      'padding': '0px 0px',
      'margin-top': '-10px',
      'margin-left': '-20px',
      'margin-bottom': '10px',
      'text-align': 'center',
      'justify-content': 'center',
    },
    '.sub-parrafos': {
      'margin': '0px',
      'padding-left': '20px',
    },
    'p': {
      'margin': '10px 0px',
    },
    '.p-encabezado': {
      'text-align': 'center',
      'margin': '0px',
      'font-size': '16px',
    },
    '.p-encabezado p': {
      'margin': '2px 0px',
    },
    '.sub-parrafos p': {
      'margin': '18px 0px',
    },
    '.png-perfil': {
      'position': 'relative',
    },
    '.png-perfil img': {
      'position': 'absolute',
      'right': '30px',
      'top': '5px',
      'width': '90px',
      'height': '110px',
      'border': '3px solid #232323',
    },
    '.logo-doc': {
      'position': 'absolute',
      'top': '108px',
      'left': '140px',
    },
    '.pdf-matriculas': {
      'position': 'relative',
      'display': 'flex',
      'flex-direction': 'column',
      'padding-left': '9vw',
      'padding-right': '6vw',
    },
    '.pdf-matriculas h1': {
      'font-size': '2rem',
      'font-weight': '500',
      'line-height': '1.2',
      'margin-top': '0px',
      'margin-bottom': '0px',
      'text-align': 'center',
    },
    '.pdf-matriculas h2': {
      'font-weight': '500',
      'line-height': '1.3',
      'margin-top': '0px',
      'margin-bottom': '0px',
      'text-align': 'center',
    },
    '.pdf-matriculas h3': {
      'text-align': 'center',
      'margin-top': '0px',
      'margin-bottom': '0px',
    },
    '.titulo-foto': {
      'text-align': 'center',
      'margin-left': '4px',
    },
    '.titulo-foto img': {
      'margin-top': '10px',
      'margin-bottom': '10px',
      'margin-left': '10px',
    },
  };

  constructor(private matriculaService: MatriculaService, private deceService: DeceService ) {

  }

  ngOnInit() {
    this.deceService.labelClickEvent.subscribe(() => {
      this.getVistaHoja1();
      this.getVistaHoja2();
      this.getVistaHoja3();
      this.getVistaHoja4();
    });
  }

  getVistaHoja1() {
    const id = this.matriculaService.cedulaid;
    if (id) {
      this.deceService.getHoja1Dece(id).subscribe(
        response => {
          this.hoja1 = response;
        }
      );
    }
  }

  getVistaHoja2() {
    const id = this.matriculaService.cedulaid;
    if (id) {
      this.deceService.getHoja2Dece(id).subscribe(
        response => {
          this.hoja2 = response;
        }
      );
    }
  }

  getVistaHoja3() {
    const id = this.matriculaService.cedulaid;
    if (id) {
      this.deceService.getHoja3Dece(id).subscribe(
        response => {
          this.hoja3 = response;
        }
      );
    }
  }

  getVistaHoja4() {
    const id = this.matriculaService.cedulaid;
    if (id) {
      this.deceService.getHoja4Dece(id).subscribe(
        response => {
          this.hoja4 = response;
        }
      );
    }
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

  onLabel3Click() {
    this.deceService.emitLabelClickEvent();
  }

  cambiarComponDece(numeroComponente: number) {
    this.deceService.mostrarComponente(numeroComponente);
  }

  ocultarComponDece() {
    this.deceService.ocultarComponente();
  }

}
