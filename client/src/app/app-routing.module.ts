import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { RecordComponent } from './pages/record/record.component';
import { DeceComponent } from './pages/dece/dece.component';
import { SegurosComponent } from './pages/seguros/seguros.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { guardianGuard } from './guard/guardian.guard';

const routes: Routes = [
  {
    path: '' , redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inicio', component: HomePageComponent, canActivate:[guardianGuard]
  },
  {
    path: 'matricula',
    component: MatriculaComponent, canActivate:[guardianGuard]
  },
  {
    path: 'record-escolar',
    component: RecordComponent, canActivate:[guardianGuard]
  },
  {
    path: 'dece',
    component: DeceComponent, canActivate:[guardianGuard]
  },
  {
  path: 'seguros',
  component: SegurosComponent, canActivate:[guardianGuard]
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent, canActivate:[guardianGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
