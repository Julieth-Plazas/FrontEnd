import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NavUserComponent } from './Components/nav-user/nav-user.component';
import { DisponibilidadUserComponent } from './Components/disponibilidad-user/disponibilidad-user.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';
import { SolReservaComponent } from './Components/sol-reserva/sol-reserva.component';
import { CrudUserComponent } from './Components/crud-user/crud-user.component';
import { CrudAdmonComponent } from './Components/crud-admon/crud-admon.component';
import { LoginComponent } from './Components/login/login.component';
import { CrearEscenarioComponent } from './Components/crear-escenario/crear-escenario.component';
import { VisualizarAdmonComponent } from './Components/visualizar-admon/visualizar-admon.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"nav-user",component:NavUserComponent},
  {path:"disponibilidad",component:DisponibilidadUserComponent},
  {path:"ver", component:GestionUserComponent},
  {path: "reserva",component: SolReservaComponent},
  {path:"crud_user",component:CrudUserComponent},
  {path: "crud_admon", component: CrudAdmonComponent},
  {path: "login",component: LoginComponent},
  {path: "crearEsc", component: CrearEscenarioComponent},
  {path: "verEscenarios", component: VisualizarAdmonComponent},
  {path: "reporte", component: ReportesComponent},
  {path:"**",pathMatch:"full",redirectTo: "login"}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
