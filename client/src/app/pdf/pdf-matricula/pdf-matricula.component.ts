import { Component } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { MatriculaService } from 'src/app/services/matricula-service/matricula.service';
import { HomeService } from 'src/app/services/home-service/home.service';
import { FormControl, FormGroup } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdf-matricula',
  templateUrl: './pdf-matricula.component.html',
  styleUrls: ['./pdf-matricula.component.scss']
})
export class PdfMatriculaComponent {
  
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

  estudiante: Estudiantes[] =[];
  formulario: FormGroup;
  pdf = new jsPDF();
  vistapdf = 'estiloformulario';

  constructor(private matriculaService: MatriculaService, public homeService: HomeService ){

    this.formulario = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      cedula: new FormControl(),
      nacimiento: new FormControl(),
      genero: new FormControl(),
      discapacidad: new FormControl(),
      disca_porcentaje: new FormControl(),
      ciudad_naci: new FormControl(),
      etnia: new FormControl(),
      provincia: new FormControl(),
      canton: new FormControl(),
      parroquia: new FormControl(),
      direccion_detallada: new FormControl(),
      nombres_repre: new FormControl(),
      apellidos_repre: new FormControl(),
      cedula_repre: new FormControl(),
      telefono: new FormControl(),
      celular: new FormControl(),
      parentesco: new FormControl(),
      id_matri: new FormControl(),
      estudiante_matri_id: new FormControl(),
      curso: new FormControl(),
      jornada: new FormControl(),
      anio_lectivo: new FormControl(),
      fecha_matri: new FormControl(),
      especialidad: new FormControl()
    })
  }

  ngOnInit(): void {
    this.homeService.getResultadosbuscarPorCedula().subscribe(
      (resultados) => {
        this.estudiante = resultados as Estudiantes[];
      }
    );
  }

  cambiarEstilos() {
    if (this.vistapdf === 'estiloformulario') {
      this.vistapdf = 'estilopdf';
    } else {
      this.vistapdf = 'estiloformulario';
    }
  }

  convertirADivsAPDF() {
    const div1 = document.getElementById('hoja_pdf1');
    const div2 = document.getElementById('hoja_pdf2');

    if (div1 && div2) {
      // Captura el contenido del primer div en un canvas
      html2canvas(div1, { scale: 2 }).then((canvas1) => {
        // Captura el contenido del segundo div en un canvas
        html2canvas(div2, { scale: 2 }).then((canvas2) => {
          // Crea un objeto jsPDF con orientación 'p' (vertical) y unidad 'mm'
          const pdf = new jsPDF('p', 'mm', 'a4');

          // Convierte los canvas en imágenes y agrega al PDF
          const imgData1 = canvas1.toDataURL('image/png');
          const imgData2 = canvas2.toDataURL('image/png');

          pdf.addImage(imgData1, 'PNG', 0, 0, 210, 297);
          pdf.addPage();
          pdf.addImage(imgData2, 'PNG', 0, 0, 210, 297);

          // Guarda o muestra el PDF, según tus necesidades
          pdf.save('matricula.pdf');
        });
      });
    } else {
      console.error('No se encontro el pdf');
    }
  }

  cambiarComponente(numeroComponente: number) {
    this.homeService.mostrarComponente(numeroComponente);
  }

  ocultarComponente() {
    this.homeService.ocultarComponente();
  }

}
