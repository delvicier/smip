import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeceService } from 'src/app/services/dece-service/dece.service';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-dece-search',
  templateUrl: './dece-search.component.html',
  styleUrls: ['./dece-search.component.scss']
})
export class DeceSearchComponent {

  searchForm: FormGroup;

  constructor( private deceService:DeceService, public vistas: VistasService ) {
    this.searchForm = new FormGroup({
      cedula: new FormControl,
    });
  }

  buscar(): void {
    const cedula = this.searchForm.get('cedula')?.value;
    if (cedula) {
      this.deceService.buscarPorCedula(cedula);
      this.deceService.cedulaid = this.searchForm.get('cedula')?.value;
      console.log(cedula);
    }
    this.mostrarComponente(3);
    this.onLabel2Click();
  }

  ngOnInit(): void {
  }

  mostrarComponente(numeroComponente2: number) {
    this.vistas.mostrarComponente2(numeroComponente2);
  }
  ocultarComponente() {
    this.vistas.ocultarComponente2();
  }
  
  reloadPage(): void {
    location.reload();
  }

  onLabel2Click() {
    this.deceService.emitLabelClickEvent();
  }

}
