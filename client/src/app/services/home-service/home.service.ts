import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/estudiantes';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { Record } from 'src/app/models/record';
import { BehaviorSubject, Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { LayoutRecordComponent } from 'src/app/pdf/layout-record/layout-record.component';
import { DialogHomeComponent } from 'src/app/home/dialog-home/dialog-home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://192.168.1.19:4000/estudiante';
  private apiUrl2 = 'http://192.168.1.19:4000/';
  private resultadosSubject: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject2: BehaviorSubject<Estudiantes[]> = new BehaviorSubject<Estudiantes[]>([]);
  private resultadosSubject3: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);
  private resultadosSubject4: BehaviorSubject<Record[]> = new BehaviorSubject<Record[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();
  label2ClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient, private dialog: MatDialog ) {
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
      this.http.post<any>(`${this.apiUrl2}login`, formValue )
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

  buscarPorRecord(cedula: string): void {
    this.http.get<Record[]>(`${this.apiUrl2}record/${cedula}`).subscribe(
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

  updateMatriEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/cedula/${id}`, data);
  }

  postMatriEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  postRecordEstudiante(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl2}record`, data);
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

  buscarAllRecord(curso: string, jornada: string, anioLectivo: string): void {
    this.http.get<Record[]>(`${this.apiUrl2}records?curso=${curso}&jornada=${jornada}&anio_lectivo=${anioLectivo}`).subscribe(
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

  getRecordEstudiante(id: string): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.apiUrl2}record/${id}`);
  }

  updateRecordEstudiante(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl2}record/cedula/${id}`, data);
  }


  getHoja1Dece(id: string){
    return this.http.get<DeceHoja1[]>(`${this.apiUrl}/decehoja1/${id}`);
  }

  postHoja1Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/deceh1`, data);
  }

  updateHoja1Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/deceh1/${id}`, data);
  }

  getHoja2Dece(id: string){
    return this.http.get<DeceHoja2[]>(`${this.apiUrl}/decehoja2/${id}`);
  }

  postHoja2Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/deceh2`, data);
  }

  updateHoja2Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/deceh2/${id}`, data);
  }

  getHoja3Dece(id: string){
    return this.http.get<DeceHoja3[]>(`${this.apiUrl}/decehoja3/${id}`);
  }

  postHoja3Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/deceh3`, data);
  }

  updateHoja3Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/deceh3/${id}`, data);
  }

  getHoja4Dece(id: string){
    return this.http.get<DeceHoja4[]>(`${this.apiUrl}/decehoja4/${id}`);
  }

  postHoja4Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/deceh4`, data);
  }

  updateHoja4Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}/deceh4/${id}`, data);
  }

  openContenidoModal() {
    const dialogRef = this.dialog.open(DialogHomeComponent, {
      width: '100px',
    });
    setTimeout(() => {
      dialogRef.close();
    }, 400);
  }

}
