import { Component } from '@angular/core';
import { Record } from 'src/app/models/record';
import { FormControl, FormGroup } from '@angular/forms';
import { RecordService } from 'src/app/services/record-service/record.service';
import { VistasService } from 'src/app/services/vistas-service/vistas.service';

@Component({
  selector: 'app-record2-search',
  templateUrl: './record2-search.component.html',
  styleUrls: ['./record2-search.component.scss']
})
export class Record2SearchComponent {

  record: Record[] = [];
  searchForm: FormGroup;

  constructor( private recordService:RecordService, public vistas: VistasService) {
    this.searchForm = new FormGroup({
      cedula: new FormControl,
    });
  }

  buscar(): void {
    const cedula = this.searchForm.get('cedula')?.value;
    if (cedula) {
      this.recordService.buscarPorRecord(cedula);
      this.recordService.recordid = this.searchForm.get('cedula')?.value;
    }
  }

  ngOnInit(): void {
    this.recordService.getResultadosbuscarPorRecord().subscribe(
      (resultados) => {
        this.record = resultados as Record[] ;

      }

    );
  }

  mostrarComponente(numeroComponente3: number) {
    this.vistas.mostrarComponente3(numeroComponente3);
  }

  ocultarComponente() {
    this.vistas.ocultarComponente3();
  }

  reloadPage(): void {
    location.reload();
  }

  busquedas(){
    this.mostrarComponente(4);
  }

}


