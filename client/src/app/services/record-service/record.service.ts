import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record } from 'src/app/models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private apiURL = 'http://localhost:4000/';
  private resultadosSubject3: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  private resultadosSubject4: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient) {
  }

  recordid: any;
  cedulaid: any;
  cursoid: any;
  jornadaid: any;
  anioid: any;

  matriculados: any;
  hombres: any;
  mujeres: any;
  electromecanica: any;
  instalaciones: any;
  mecanizado: any;
  seguridad: any;
  soldadura: any;

  private estadisticasObs = new BehaviorSubject<string>('0');

  estadisticas$: Observable<string> = this.estadisticasObs.asObservable();

  actualizarValor(nuevoValor: string) {
    this.estadisticasObs.next(nuevoValor);
  }

  emitLabelClickEvent() {
    this.labelClickEvent.emit();
  }

  getRecordEstudiante(id: string): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.apiURL}record/${id}`);
  }

  buscarPorRecord(cedula: string): void {
    this.http.get<Record[]>(`${this.apiURL}record/${cedula}`).subscribe(
      (resultados: Record[]) => {
        this.resultadosSubject3.next(resultados);
      },
      error => {
        console.error(error);
      }
    );
  }

  getResultadosbuscarPorRecord(): Observable<Record[]> {
    return this.resultadosSubject3.asObservable();
  }


  buscarAllRecord(curso: string, jornada: string, anioLectivo: string): void {
    this.http.get<Record[]>(`${this.apiURL}records?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
      (resultados: Record[]) => {
        this.resultadosSubject4.next(resultados);
      },
      error => {
        console.error(error);
      }
    );
  }

  getResultadosbuscarAllRecord(): Observable<Record[]> {
    return this.resultadosSubject4.asObservable();
  }

  postRecordEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}record`, data);
  }

  updateRecordEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiURL}record/cedula/${id}`, data);
  }

}