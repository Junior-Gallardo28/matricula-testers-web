import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { EditAlumnosComponent } from './components/edit-alumnos/edit-alumnos.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'alumnos/registrar-alumnos', component: RegistrarAlumnoComponent },
  { path: 'login', component: LoginAdminComponent },
  { path: 'alumnos/listar-alumnos', component: ListarAlumnosComponent },
  { path: 'alumnos/editar-alumno/:id', component: EditAlumnosComponent },
  { path: 'signup', component: SignupAdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
