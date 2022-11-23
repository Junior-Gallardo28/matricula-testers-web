import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { EditAlumnosComponent } from './components/edit-alumnos/edit-alumnos.component';
import { RegistrarProfesorComponent } from './components/registrar-profesor/registrar-profesor.component';
import { ListarProfesoresComponent } from './components/listar-profesores/listar-profesores.component';
import { EditProfesorComponent } from './components/edit-profesor/edit-profesor.component';
import { RegistrarCursoComponent } from './components/registrar-curso/registrar-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'alumnos/registrar-alumnos', component: RegistrarAlumnoComponent},
  {path: 'login',component:LoginAdminComponent},
  {path: 'alumnos/listar-alumnos', component: ListarAlumnosComponent},
  {path: 'alumnos/editar-alumno/:id',component:EditAlumnosComponent},
  {path: 'profesor/registrar-profesor', component:RegistrarProfesorComponent},
  {path: 'profesor/listar-profesor', component: ListarProfesoresComponent},
  {path: 'profesor/editar-profesor/:id', component: EditProfesorComponent},
  {path: 'curso/registrar-curso', component: RegistrarCursoComponent},
  {path: 'curso/listar-cursos', component: ListarCursosComponent},
  {path: 'curso/editar-curso/:id', component: EditCursoComponent},
  {path: 'signup', component:SignupAdminComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
