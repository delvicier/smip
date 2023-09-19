import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { Record } from 'src/app/models/record';
import { BehaviorSubject, Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VistasService {



  constructor( private http: HttpClient) {

  }


  numero: number | null = null;

  mostrarComponente(numeroComponente: number) {
    this.numero = numeroComponente;
  }

  ocultarComponente() {
    this.numero = null;
  }
  
  numero2: number | null = null;

  mostrarComponente2(numeroComponente2: number) {
    this.numero2 = numeroComponente2;
  }

  ocultarComponente2() {
    this.numero2 = null;
  }

  numero3: number | null = null;

  mostrarComponente3(numeroComponente3: number) {
    this.numero3 = numeroComponente3;
  }

  ocultarComponente3() {
    this.numero3 = null;
  }
  
  numero4: number | null = null;

  mostrarComponente4(numeroComponente4: number) {
    this.numero4 = numeroComponente4;
  }

  ocultarComponente4() {
    this.numero4 = null;
  }


}
