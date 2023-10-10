import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DialogHomeErrorComponent } from 'src/app/home/dialog-home-error/dialog-home-error.component';
import { DialogHomeComponent } from 'src/app/home/dialog-home/dialog-home.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DeceService {

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

  private resultadosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient, private dialog: MatDialog) { this.obtenerDireccionIP();}

  deceid: any;
  cedulaid: any;

  numero: number | null = null;

  mostrarComponente(numeroComponente: number) {
    this.numero = numeroComponente;
  }

  ocultarComponente() {
    this.numero = null;
  }

  emitLabelClickEvent() {
    this.labelClickEvent.emit();
  }

  buscarPorCedula(cedula: string): void {
    this.http.get<any[]>(`${this.apiUrl}decehoja1/${cedula}`).subscribe(
      (resultados: any[]) => {
        this.resultadosSubject.next(resultados);
      },
      error => {
        console.error(error);
        this.openContenidoModal2();
      }
    );
  }

  getResultadosbuscarPorCedula(): Observable<any[]> {
    return this.resultadosSubject.asObservable();
  }

  getHoja1Dece(id: string){
    return this.http.get<DeceHoja1[]>(`${this.apiUrl}decehoja1/${id}`);
  }

  postHoja1Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}deceh1`, data);
  }

  updateHoja1Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}deceh1/${id}`, data);
  }

  getHoja2Dece(id: string){
    return this.http.get<DeceHoja2[]>(`${this.apiUrl}decehoja2/${id}`);
  }

  postHoja2Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}deceh2`, data);
  }

  updateHoja2Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}deceh2/${id}`, data);
  }

  getHoja3Dece(id: string){
    return this.http.get<DeceHoja3[]>(`${this.apiUrl}decehoja3/${id}`);
  }

  postHoja3Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}deceh3`, data);
  }

  updateHoja3Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}deceh3/${id}`, data);
  }

  getHoja4Dece(id: string){
    return this.http.get<DeceHoja4[]>(`${this.apiUrl}decehoja4/${id}`);
  }

  postHoja4Dece(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}deceh4`, data);
  }

  updateHoja4Dece(id: any, data: any ){
    return this.http.put<any>(`${this.apiUrl}deceh4/${id}`, data);
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
