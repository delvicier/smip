import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { DeceHoja1, DeceHoja2, DeceHoja3, DeceHoja4 } from 'src/app/models/dece';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
        }
      );
    }
  }

  private resultadosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  labelClickEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor( private http: HttpClient) { this.obtenerDireccionIP();}

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

}
