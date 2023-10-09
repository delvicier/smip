import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record } from 'src/app/models/record';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private apiUrl = environment.apiUrl;

  private apiUrl2: string | undefined;

  obtenerDireccionIP(): void {
    if (!this.apiUrl) {
      this.http.get<string>('http://localhost:4000/direccion').subscribe(
        (ip) => {
          this.apiUrl = ip;
        },
        (error) => {
          console.error('Error al obtener IP:', error);
        }
      );
    }
  }

  private resultadosSubject3: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  private resultadosSubject4: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient) { this.obtenerDireccionIP();
  }

  recordid: any;
  cedulaid: any;
  cursoid: any;
  jornadaid: any;
  anioid: any;

  private buttonClickSubject = new Subject<void>();

  buttonClick$ = this.buttonClickSubject.asObservable();

  triggerButtonClick() {
    this.buttonClickSubject.next();
  }

  private estadisticasObs = new BehaviorSubject<string>('0');

  estadisticas$: Observable<string> = this.estadisticasObs.asObservable();

  actualizarValor(nuevoValor: string) {
    this.estadisticasObs.next(nuevoValor);
  }

  emitLabelClickEvent() {
    this.labelClickEvent.emit();
  }

  numero: number | null = null;

  mostrarComponente(numeroComponente: number) {
    this.numero = numeroComponente;
  }

  ocultarComponente() {
    this.numero = null;
  }

  getRecordEstudiante(id: string): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.apiUrl}record/${id}`);
  }

  buscarPorRecord(cedula: string): void {
    this.http.get<Record[]>(`${this.apiUrl}record/${cedula}`).subscribe(
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
    this.http.get<Record[]>(`${this.apiUrl}records?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
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
    return this.http.post(`${this.apiUrl}record`, data);
  }

  updateRecordEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}record/cedula/${id}`, data);
  }

}
