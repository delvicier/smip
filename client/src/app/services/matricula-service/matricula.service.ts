import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estudiantes } from 'src/app/models/estudiantes';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private apiUrl = 'http://localhost:4000/estudiante';
  private apiUrl2 = 'http://localhost:4000/';
  private resultadosSubject: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject2: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient ) {
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
  
  login(formValue: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.apiUrl2}/login`, formValue )
    );
  }

  getAllMatriEstudiantes(){
    return this.http.get<Estudiantes[]>(this.apiUrl + 'stotales');
  }

  getMatriEstudiante(id: string){
    return this.http.get<Estudiantes[]>(`${this.apiUrl}/${id}`);
  }

  buscarPorCedula(cedula: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl}/${cedula}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject.next(resultados);
      },
      error => {
        console.error(error);
      }
    );
  }

  getResultadosbuscarPorCedula(): Observable<Estudiantes[]> {
    return this.resultadosSubject.asObservable();
  }

  
  getAllMatriEstudiante(curso: string, jornada: string, anioLectivo: string): Observable<any> {
    const url = `${this.apiUrl2}estudiantes?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`;
    return this.http.get(url);
  }


  buscarAllMatri(curso: string, jornada: string, anioLectivo: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl2}estudiantes?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject2.next(resultados);
      },
      error => {
        console.error(error);
      }
    );
  }

  getResultadosbuscarAllMatri(): Observable<Estudiantes[]> {
    return this.resultadosSubject2.asObservable();
  }

  updateMatriEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/cedula/${id}`, data);
  }

  postMatriEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

}
