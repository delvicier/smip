import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { Vistas2Service } from 'src/app/services/vistas-service/vistas2.service';
import { RecordService } from 'src/app/services/record-service/record.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-record-editpdf',
  templateUrl: './record-editpdf.component.html',
  styleUrls: ['./record-editpdf.component.scss']
})
export class RecordEditpdfComponent {

  formatoEstilos2 = {
    'pdf': {
      'margin': '0',
      'padding': '0',
      'border': 'none',
      'background': 'transparent',
      'font-size': 'inherit',
      'font-family': 'inherit',
      'line-height': 'inherit',
      'color': 'inherit',
    },
    '.editor': {
      'font-size': '9px',
      'margin': '0px',
      'padding': '0px',
      'background-color': '#ffffff',
    },
    '.editor-toolbar-item': {
      'background-color': 'transparent',
      'border': '0',
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'transition': '0.15s ease',
    },
    'h1': {
      'font-size': '11px',
      'text-align': 'center',
    },
    'h3': {
      'text-align': 'center',
      'font-size': '11px',
    },
    '.region-año': {
      'display': 'grid',
      'grid-template-columns': '1fr 1fr 1fr',
      'text-align': 'center',
    },
    '.parrafo-datos1': {
      'display': 'grid',
      'grid-template-columns': '1fr 1fr',
    },
    '.parrafo-cont': {
      'display': 'flex',
    },
    '.tableizer-table': {
      'width': '270mm',
      'max-height': '200mm',
      'font-size': '9px',
      'border': '1px solid #000000',
      'border-collapse': 'collapse',
    },
    '.tcuerpo td': {
      'padding': '1px',
      'margin': '1px',
      'border': '1px solid #000000',
      'text-align': 'center',
    },
    '.tcabezera th': {
      'background-color': '#FFF',
      'border': '1px solid #000000',
      'color': '#000000',
      'font-weight': 'bold',
      'padding': '1px',
      'text-align': 'center',
    },
    '.tcuerpo2 td': {
      'padding': '1px',
    },
    '.tcabezera2 th': {
      'color': '#000000',
      'font-weight': 'bold',
      'padding': '1px',
      'margin': '1px',
    },
    '.label-cuadrado': {
      'text-align': 'center',
    },
    '.cuadrado': {
      'border': '1px solid #CCC',
      'height': '12px',
      'text-align': 'center',
    },
    '.cuadrado2': {
      'border': '1px solid #CCC',
      'height': '12px',
      'max-width': '30px',
      'text-align': 'center',
    },
    '.tableizer-firstrow2': {
      'text-align': 'left',
    },
    '.tableizer-firstrow3': {
      'font-size': '9px',
    },
  };

  record: Record[] =[];
  formrecord: FormGroup;

  pdf = new jsPDF();
  vistapdf = 'estiloformulario';

  cursoid: any;
  jornadaid: any;
  anioid: any;

  constructor(private recordService: RecordService, public vistas2: Vistas2Service){

    this.formrecord = new FormGroup({
      primero: new FormControl(),
      segundo: new FormControl(),
      tercero: new FormControl(),
      cuarto: new FormControl(),
      quinto: new FormControl(),
      sexto: new FormControl(),
      septimo: new FormControl(),
      octavo: new FormControl(),
      noveno: new FormControl(),
      decimo: new FormControl(),
      promedio_basic: new FormControl(),
      primero_bgu: new FormControl(),
      segundo_bgu: new FormControl(),
      tercero_bgu: new FormControl(),
      promedio_bgu: new FormControl(),
      proyecto: new FormControl(),
      participacion: new FormControl(),
      observaciones: new FormControl()
    })
  }


  ngOnInit() {
    this.recordService.getResultadosbuscarAllRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[];
        this.cursoid = this.recordService.cursoid;
        this.jornadaid = this.recordService.jornadaid;
        this.anioid = this.recordService.anioid;
      }
    );
  }


  convertirADivsAPDF() {
    const div1 = document.getElementById('hoja_pdf1');

    if (div1) {
      // Captura el contenido del primer div en un canvas
      html2canvas(div1, { scale: 2 }).then((canvas1) => {

          const pdf = new jsPDF('l', 'mm', 'a4');

          // Convierte los canvas en imágenes y agrega al PDF
          const imgData1 = canvas1.toDataURL('image/png');

          pdf.addImage(imgData1, 'PNG', 0, 0, 297, 210);

          // Guarda o muestra el PDF, según tus necesidades
          pdf.save('record.pdf');
        });
    } else {
      console.error('No se encontro el pdf');
    }
  }

  cambiarEstilos() {
    if (this.vistapdf === 'estiloformulario') {
      this.vistapdf = 'estilopdf';
    } else {
      this.vistapdf = 'estiloformulario';
    }
  }

  mostrarComponente2(numero2: number) {
    this.vistas2.mostrarComponente2(numero2);
  }

  ocultarComponente2() {
    this.vistas2.ocultarComponente2();
  }

}
