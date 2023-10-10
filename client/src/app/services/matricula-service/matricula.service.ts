import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estudiantes } from 'src/app/models/estudiantes';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogHomeErrorComponent } from 'src/app/home/dialog-home-error/dialog-home-error.component';
import { DialogHomeComponent } from 'src/app/home/dialog-home/dialog-home.component';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private apiUrl = environment.apiUrl;

  private apiUrl2: string | undefined;

  obtenerDireccionIP(): void {
    if (!this.apiUrl) {
      this.http.get<string>('http://localhost:4000/direccion').subscribe(
        (ip) => {
          this.apiUrl = ip;
        },
        (error) => {
          this.openContenidoModal2();
          console.error('Error al obtener IP:', error);
        }
      );
    }
  }

  private resultadosSubject: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject2: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject3: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient, private dialog: MatDialog ) { this.obtenerDireccionIP();
  }

  recordid: any;
  cedulaid: any;
  cursoid: any;
  jornadaid: any;
  anioid: any;

  matriculados: any;
  matriculadosatras: any;
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



  private estadisticasObs2 = new BehaviorSubject<string>('0');

  estadisticas2$: Observable<string> = this.estadisticasObs2.asObservable();

  actualizarValor2(nuevoValor: string) {
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

  numero2: number | null = null;

  mostrarComponente2(numeroComponente2: number) {
    this.numero2 = numeroComponente2;
  }

  ocultarComponente2() {
    this.numero2 = null;
  }


  login(formValue: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.apiUrl}login`, formValue )
    );
  }

  getAllMatriEstudiantes(){
    return this.http.get<Estudiantes[]>(this.apiUrl + 'estudiantestotales');
  }

  getMatriEstudiante(cedula: string){
    return this.http.get<Estudiantes[]>(`${this.apiUrl}estudiante/${cedula}`);
  }

  getEstadisticas(anio: string){
    return this.http.get<Estudiantes[]>(`${this.apiUrl}estadisticas/${anio}`);
  }

  buscarPorCedula(cedula: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl}estudiante/${cedula}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject.next(resultados);
      },
      error => {
        this.openContenidoModal2();
        console.error(error);
      }
    );
  }

  getResultadosbuscarPorCedula(): Observable<Estudiantes[]> {
    return this.resultadosSubject.asObservable();
  }


  getAllMatriEstudiante(curso: string, jornada: string, anioLectivo: string): Observable<any> {
    const url = `${this.apiUrl}estudiantes?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`;
    return this.http.get(url);
  }


  buscarAllMatri(curso: string, jornada: string, anioLectivo: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl}estudiantes?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject2.next(resultados);
      },
      error => {
        this.openContenidoModal2();
        console.error(error);
      }
    );
  }

  getResultadosbuscarAllMatri(): Observable<Estudiantes[]> {
    return this.resultadosSubject2.asObservable();
  }

  buscarAllMatri2(jornada: string, anioLectivo: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl}seguros?jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject3.next(resultados);
      },
      error => {
        this.openContenidoModal2();
        console.error(error);
      }
    );
  }

  getResultadosbuscarAllMatri2(): Observable<Estudiantes[]> {
    return this.resultadosSubject3.asObservable();
  }

  updateMatriEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/cedula/${id}`, data);
  }

  postMatriEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante`, data);
  }


  openContenidoModal() {
    const dialogRef = this.dialog.open(DialogHomeComponent, {
      width: '260px',
      height: '225px',
    });
    setTimeout(() => {
      dialogRef.close();
    }, 500);
  }

  openContenidoModal2() {
    const dialogRef = this.dialog.open(DialogHomeErrorComponent, {
      width: '340px',
      height: '270px',
    });
    setTimeout(() => {
      dialogRef.close();
    }, 500);
  }

}
