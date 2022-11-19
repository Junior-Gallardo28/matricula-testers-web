import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path:'alumnos/registrar-alumnos', component: RegistrarAlumnoComponent},
  {path:'login',component:LoginAdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
