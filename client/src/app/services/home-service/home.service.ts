import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/estudiantes';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { Record } from 'src/app/models/record';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { DialogHomeComponent } from 'src/app/home/dialog-home/dialog-home.component';
import { environment } from '../../../environments/environment';
import { DialogHomeErrorComponent } from 'src/app/home/dialog-home-error/dialog-home-error.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.apiUrl;

  private apiUrl2: any;

  obtenerDireccionIP(): void {
    if (!this.apiUrl) {
      this.http.get<string>('http://localhost:4000/direccion').subscribe(
        (ip) => {
          this.apiUrl = ip;
        },
        (error) => {
          console.error('Error al obtener IP:', error);
          this.openContenidoModal2();
        }
      );
    }
  }

  private resultadosSubject: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject2: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject3: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  private resultadosSubject4: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();
  label2ClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient, private dialog: MatDialog ) { this.obtenerDireccionIP();
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

  emitLabelClickEvent() {
    this.labelClickEvent.emit();
  }

  emitLabel2ClickEvent() {
    this.label2ClickEvent.emit();
  }

  recordid: any;
  cedulaid: any;
  deceid: any;

  private estadisticasObs = new BehaviorSubject<string>('0');

  estadisticas$: Observable<string> = this.estadisticasObs.asObservable();

  actualizarValor(nuevoValor: string) {
    this.estadisticasObs.next(nuevoValor);
  }

  login(formValue: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.apiUrl}login`, formValue )
    );
  }

  getAllMatriEstudiantes(){
    return this.http.get<Estudiantes[]>(this.apiUrl + 'estudiantestotales');
  }

  getMatriEstudiante(id: string){
    return this.http.get<Estudiantes[]>(`${this.apiUrl}estudiante/${id}`);
  }

  buscarPorCedula(cedula: string): void {
    this.http.get<Estudiantes[]>(`${this.apiUrl}estudiante/${cedula}`).subscribe(
      (resultados: Estudiantes[]) => {
        this.resultadosSubject.next(resultados);
      },
      error => {
        console.error(error);
        this.openContenidoModal2();

      }
    );
  }

  getResultadosbuscarPorCedula(): Observable<Estudiantes[]> {
    return this.resultadosSubject.asObservable();
  }

  buscarPorRecord(cedula: string): void {
    this.http.get<Record[]>(`${this.apiUrl}record/${cedula}`).subscribe(
      (resultados: Record[]) => {
        this.resultadosSubject3.next(resultados);
      },
      error => {
        console.error(error);
        this.openContenidoModal2();
      }
    );
  }

  getResultadosbuscarPorRecord(): Observable<Record[]> {
    return this.resultadosSubject3.asObservable();
  }

  updateMatriEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/cedula/${id}`, data);
  }

  postMatriEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante`, data);
  }

  postRecordEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}record`, data);
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
        console.error(error);
        this.openContenidoModal2();
      }
    );
  }

  getResultadosbuscarAllMatri(): Observable<Estudiantes[]> {
    return this.resultadosSubject2.asObservable();
  }

  buscarAllRecord(curso: string, jornada: string, anioLectivo: string): void {
    this.http.get<Record[]>(`${this.apiUrl}records?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
      (resultados: Record[]) => {
        this.resultadosSubject4.next(resultados);
      },
      error => {
        console.error(error);
        this.openContenidoModal2();
      }
    );
  }

  getResultadosbuscarAllRecord(): Observable<Record[]> {
    return this.resultadosSubject4.asObservable();
  }

  getRecordEstudiante(id: string): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.apiUrl}record/${id}`);
  }

  updateRecordEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}record/cedula/${id}`, data);
  }


  getHoja1Dece(id: string){
    return this.http.get<DeceHoja1[]>(`${this.apiUrl}estudiante/decehoja1/${id}`);
  }

  postHoja1Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante/deceh1`, data);
  }

  updateHoja1Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/deceh1/${id}`, data);
  }

  getHoja2Dece(id: string){
    return this.http.get<DeceHoja2[]>(`${this.apiUrl}estudiante/decehoja2/${id}`);
  }

  postHoja2Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante/deceh2`, data);
  }

  updateHoja2Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/deceh2/${id}`, data);
  }

  getHoja3Dece(id: string){
    return this.http.get<DeceHoja3[]>(`${this.apiUrl}estudiante/decehoja3/${id}`);
  }

  postHoja3Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante/deceh3`, data);
  }

  updateHoja3Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/deceh3/${id}`, data);
  }

  getHoja4Dece(id: string){
    return this.http.get<DeceHoja4[]>(`${this.apiUrl}estudiante/decehoja4/${id}`);
  }

  postHoja4Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}estudiante/deceh4`, data);
  }

  updateHoja4Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}estudiante/deceh4/${id}`, data);
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
