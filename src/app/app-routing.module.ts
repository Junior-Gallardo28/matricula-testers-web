import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';

const routes: Routes = [
  
  {path:'alumnos/registrar-alumnos', component: RegistrarAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
