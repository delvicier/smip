import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPrintModule } from 'ngx-print';
import { NgChartsModule } from 'ng2-charts';

import { AuthInterceptor } from './auth/interceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfMatriculaComponent } from './pdf/pdf-matricula/pdf-matricula.component';
import { PdfDeceComponent } from './pdf/pdf-dece/pdf-dece.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { DeceComponent } from './pages/dece/dece.component';
import { RecordComponent } from './pages/record/record.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SearchHomeComponent } from './home/search-home/search-home.component';
import { PdfRecordComponent } from './pdf/pdf-record/pdf-record.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { NavLeftComponent } from './navbar/nav-left/nav-left.component';
import { NavLeft2Component } from './navbar/nav-left2/nav-left2.component';
import { NavRightComponent } from './navbar/nav-right/nav-right.component';
import { GraficGeneroComponent } from './graficos/grafic-genero/grafic-genero.component';
import { GraficMatriculaComponent } from './graficos/grafic-matricula/grafic-matricula.component';
import { GraficSegurosComponent } from './graficos/grafic-seguros/grafic-seguros.component';
import { LoginComponent } from './pages/login/login.component';
import { MatriculaBtnComponent } from './pages-btn/matricula-btn/matricula-btn.component';
import { DeceBtnComponent } from './pages-btn/dece-btn/dece-btn.component';
import { SegurosBtnComponent } from './pages-btn/seguros-btn/seguros-btn.component';
import { RecordBtnComponent } from './pages-btn/record-btn/record-btn.component';
import { MatriculaSearchComponent } from './pages-search/matricula-search/matricula-search.component';
import { DeceSearchComponent } from './pages-search/dece-search/dece-search.component';
import { RecordSearchComponent } from './pages-search/record-search/record-search.component';
import { SegurosSearchComponent } from './pages-search/seguros-search/seguros-search.component';
import { Record2SearchComponent } from './pages-search/record2-search/record2-search.component';
import { Matricula2SearchComponent } from './pages-search/matricula2-search/matricula2-search.component';
import { MatriculaDocComponent } from './docs/matricula-doc/matricula-doc.component';
import { RecordDocComponent } from './docs/record-doc/record-doc.component';
import { DeceDocComponent } from './docs/dece-doc/dece-doc.component';
import { SegurosDocComponent } from './docs/seguros-doc/seguros-doc.component';
import { MatriculaResultComponent } from './pages-result/matricula-result/matricula-result.component';
import { DeceResultComponent } from './pages-result/dece-result/dece-result.component';
import { RecordResultComponent } from './pages-result/record-result/record-result.component';
import { MatriculaEditpdfComponent } from './pdf-edit/matricula-editpdf/matricula-editpdf.component';
import { DeceEditpdfComponent } from './pdf-edit/dece-editpdf/dece-editpdf.component';
import { RecordEditpdfComponent } from './pdf-edit/record-editpdf/record-editpdf.component';
import { MatriculaEditComponent } from './estudiante-edit/matricula-edit/matricula-edit.component';
import { DeceEditComponent } from './estudiante-edit/dece-edit/dece-edit.component';
import { RecordEditComponent } from './estudiante-edit/record-edit/record-edit.component';
import { MatriculaAddComponent } from './estudiante-add/matricula-add/matricula-add.component';
import { DeceAddComponent } from './estudiante-add/dece-add/dece-add.component';
import { RecordAddComponent } from './estudiante-add/record-add/record-add.component';
import { NavLeft3Component } from './navbar/nav-left3/nav-left3.component';
import { LayoutHomeComponent } from './home/layout-home/layout-home.component';
import { LayoutRecordComponent } from './pdf/layout-record/layout-record.component';
import { TextGeneroComponent } from './graficos/text-genero/text-genero.component';
import { TextSegurosComponent } from './graficos/text-seguros/text-seguros.component';
import { TextMatriculaComponent } from './graficos/text-matricula/text-matricula.component';
import { SegurosResultComponent } from './pages-result/seguros-result/seguros-result.component';
import { TextMatricula2Component } from './graficos/text-matricula2/text-matricula2.component';
import { TextGenero2Component } from './graficos/text-genero2/text-genero2.component';
import { TextSeguros2Component } from './graficos/text-seguros2/text-seguros2.component';
import { PdfSegurosComponent } from './pdf/pdf-seguros/pdf-seguros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordEditDialogComponent } from './pdf-edit/record-edit-dialog/record-edit-dialog.component';
import { DialogHomeComponent } from './home/dialog-home/dialog-home.component';
import { RecordAddDialogComponent } from './pdf-edit/record-add-dialog/record-add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfMatriculaComponent,
    PdfDeceComponent,
    MatriculaComponent,
    DeceComponent,
    RecordComponent,
    HomePageComponent,
    SearchHomeComponent,
    PdfRecordComponent,
    EstadisticasComponent,
    SegurosComponent,
    NavLeftComponent,
    NavLeft2Component,
    NavRightComponent,
    GraficGeneroComponent,
    GraficMatriculaComponent,
    GraficSegurosComponent,
    LoginComponent,
    MatriculaBtnComponent,
    DeceBtnComponent,
    SegurosBtnComponent,
    RecordBtnComponent,
    MatriculaSearchComponent,
    DeceSearchComponent,
    RecordSearchComponent,
    SegurosSearchComponent,
    Record2SearchComponent,
    Matricula2SearchComponent,
    MatriculaDocComponent,
    RecordDocComponent,
    DeceDocComponent,
    SegurosDocComponent,
    MatriculaResultComponent,
    DeceResultComponent,
    RecordResultComponent,
    MatriculaEditpdfComponent,
    DeceEditpdfComponent,
    RecordEditpdfComponent,
    MatriculaEditComponent,
    DeceEditComponent,
    RecordEditComponent,
    MatriculaAddComponent,
    DeceAddComponent,
    RecordAddComponent,
    NavLeft3Component,
    LayoutHomeComponent,
    LayoutRecordComponent,
    TextGeneroComponent,
    TextSegurosComponent,
    TextMatriculaComponent,
    SegurosResultComponent,
    TextMatricula2Component,
    TextGenero2Component,
    TextSeguros2Component,
    PdfSegurosComponent,
    RecordEditDialogComponent,
    DialogHomeComponent,
    RecordAddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
