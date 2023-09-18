import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { RecordComponent } from './pages/record/record.component';
import { DeceComponent } from './pages/dece/dece.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomePageComponent
  },
  {
    path: 'matricula',
    component: MatriculaComponent
  },
  {
    path: 'record-escolar',
    component: RecordComponent
  },
  {
    path: 'dece',
    component: DeceComponent
  },
  {
  path: 'seguros',
  component: SegurosComponent
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
