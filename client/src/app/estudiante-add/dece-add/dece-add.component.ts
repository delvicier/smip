import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeceService } from 'src/app/services/dece-service/dece.service';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-dece-add',
  templateUrl: './dece-add.component.html',
  styleUrls: ['./dece-add.component.scss']
})
export class DeceAddComponent {


  dece1: DeceHoja1[] = [];
  dece2: DeceHoja2[] = [];
  dece3: DeceHoja3[] = [];
  dece4: DeceHoja4[] = [];

  formulario1: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;
  formulario4: FormGroup;
  cedulaid: any;

  constructor(private homeService: HomeService, private deceService: DeceService ){
    this.formulario1 = new FormGroup({
      nombres: new FormControl(),
      cedula: new FormControl(),
      curso: new FormControl(),
      especialidad: new FormControl(),
      nacimiento: new FormControl(),
      nacionalidad: new FormControl(),
      lugar_naci: new FormControl(),
      etnia: new FormControl(),
      religion: new FormControl(),
      edad: new FormControl(),
      tipo_sangre: new FormControl(),
      domicilio: new FormControl(),
      cambio_domi: new FormControl(),
      sector_refer: new FormControl(),
      telefono_deta: new FormControl(),
      celular_deta: new FormControl(),
      nombres_madre: new FormControl(),
      edad_madre: new FormControl(),
      civil_madre: new FormControl(),
      instruccion_madre: new FormControl(),
      bono_madre: new FormControl(),
      ocupacion_madre: new FormControl(),
      telefono_madre: new FormControl(),
      correo_madre: new FormControl(),
      nombres_padre: new FormControl(),
      edad_padre: new FormControl(),
      civil_padre: new FormControl(),
      instruccion_padre: new FormControl(),
      bono_padre: new FormControl(),
      ocupacion_padre: new FormControl(),
      telefono_padre: new FormControl(),
      correo_padre: new FormControl(),
      nombres_repre: new FormControl(),
      edad_repre: new FormControl(),
      civil_repre: new FormControl(),
      instruccion_repre: new FormControl(),
      bono_repre: new FormControl(),
      ocupacion_repre: new FormControl(),
      telefono_repre: new FormControl(),
      correo_repre: new FormControl(),
      nombre_referencia: new FormControl(),
      telefono_referencia: new FormControl(),
      respuesta1_1: new FormControl(),
      respuesta1_2: new FormControl(),
      respuesta1_3: new FormControl(),
      respuesta1_4: new FormControl(),
      respuesta1_5: new FormControl(),
      presos: new FormControl(),
      respuesta1_6: new FormControl(),
      respuesta1_7: new FormControl(),
      respuesta1_8: new FormControl(),
      respuesta1_9: new FormControl(),
      respuesta1_10: new FormControl(),
      discapacitados: new FormControl(),
      respuesta1_11: new FormControl(),
      respuesta1_12: new FormControl(),
    })
    this.formulario2 = new FormGroup({
      nombres1: new FormControl(),
      parentesco1: new FormControl(),
      edad1: new FormControl(),
      profesion1: new FormControl(),
      ocupacion1: new FormControl(),
      ingresos1: new FormControl(),
      nombres2: new FormControl(),
      parentesco2: new FormControl(),
      edad2: new FormControl(),
      profesion2: new FormControl(),
      ocupacion2: new FormControl(),
      ingresos2: new FormControl(),
      nombres3: new FormControl(),
      parentesco3: new FormControl(),
      edad3: new FormControl(),
      profesion3: new FormControl(),
      ocupacion3: new FormControl(),
      ingresos3: new FormControl(),
      nombres4: new FormControl(),
      parentesco4: new FormControl(),
      edad4: new FormControl(),
      profesion4: new FormControl(),
      ocupacion4: new FormControl(),
      ingresos4: new FormControl(),
      villa: new FormControl(),
      departamento: new FormControl(),
      casa_pisos: new FormControl(),
      propia: new FormControl(),
      arrendada: new FormControl(),
      prestada: new FormControl(),
      hipotecas: new FormControl(),
      compartida: new FormControl(),
      electricidad: new FormControl(),
      agua: new FormControl(),
      alcantarillado: new FormControl(),
      telefono_fijo: new FormControl(),
      tv_cable: new FormControl(),
      internet: new FormControl(),
      discapacidad: new FormControl(),
      detallar_disc: new FormControl(),
      num_carnet: new FormControl(),
      atencion_med: new FormControl(),
      medic_regular: new FormControl(),
      observacion: new FormControl(),
      cedulaEstudiante: new FormControl(),
    })
    this.formulario3 = new FormGroup({
      fecha_ingreso: new FormControl(),
      ingreso_curso: new FormControl(),
      repitio_anio: new FormControl(),
      institucion_origen: new FormControl(),
      institucion_lugar: new FormControl(),
      problem_academico: new FormControl(),
      problem_disciplina: new FormControl(),
      relacion_pares: new FormControl(),
      otros_renacad: new FormControl(),
      bulliyng: new FormControl(),
      respuesta2_1: new FormControl(),
      respuesta2_2: new FormControl(),
      respuesta2_3: new FormControl(),
      respuesta3_1: new FormControl(),
      respuesta3_2: new FormControl(),
      respuesta3_3: new FormControl(),
      respuesta3_4: new FormControl(),
      respuesta3_5: new FormControl(),
      respuesta4_1: new FormControl(),
      respuesta4_2: new FormControl(),
      respuesta4_3: new FormControl(),
      respuesta4_4: new FormControl(),
      respuesta4_5: new FormControl(),
      respuesta4_6: new FormControl(),
      respuesta4_7: new FormControl(),
      respuesta4_8: new FormControl(),
      respuesta4_9: new FormControl(),
      respuesta4_10: new FormControl(),
      respuesta4_11: new FormControl(),
      respuesta4_12: new FormControl(),
      cedulaEstudiante: new FormControl(),
    })
    this.formulario4 = new FormGroup({
      enfermedades: new FormControl(),
      accidentes: new FormControl(),
      alergias: new FormControl(),
      cirugias: new FormControl(),
      perdida_conoci: new FormControl(),
      otros: new FormControl(),
      obesidad: new FormControl(),
      cardiacas: new FormControl(),
      hipertension: new FormControl(),
      diabetes: new FormControl(),
      mentales: new FormControl(),
      otros_pato: new FormControl(),
      otros_detalle: new FormControl(),
      observaciones: new FormControl(),
      descripcion_hijo: new FormControl(),
      nombres_repre: new FormControl(),
      cedula_repre: new FormControl(),
      fecha_repre: new FormControl(),
      cedulaEstudiante: new FormControl(),
    })
  }


  ngOnInit() {
    this.deceService.labelClickEvent.subscribe(() => {
    });
  }


  onSubmit1() {
    const formValues = this.formulario1.value;
    this.deceService.postHoja1Dece(formValues).subscribe(
      (response) => {
        this.deceService.deceid = formValues.cedula;
        this.cedulaid = formValues.cedula;
        this.homeService.openContenidoModal();
        this.formulario1.reset();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );
  }

  onSubmit2() {
    const formValues = this.formulario2.value;
    this.deceService.postHoja2Dece(formValues).subscribe(
      (response) => {
        this.homeService.openContenidoModal();
        this.formulario2.reset();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );
  }

  onSubmit3() {
    const formValues = this.formulario3.value;
    this.deceService.postHoja3Dece(formValues).subscribe(
      (response) => {
        this.homeService.openContenidoModal();
        this.formulario3.reset();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );
  }

  onSubmit4() {
    const formValues = this.formulario4.value;
    this.deceService.postHoja4Dece(formValues).subscribe(
      (response) => {
        this.homeService.openContenidoModal();
        this.formulario4.reset();
      },
      (error) => {
        this.homeService.openContenidoModal2();
      }
    );
  }


}
