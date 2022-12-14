import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AngularMaterialModule } from './shared/angular.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { HomeComponent } from './components/home/home.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RegistrarAlumnoComponent } from './components/registrar-alumno/registrar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { EditAlumnosComponent } from './components/edit-alumnos/edit-alumnos.component';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import { RegistrarProfesorComponent } from './components/registrar-profesor/registrar-profesor.component';
import { ListarProfesoresComponent } from './components/listar-profesores/listar-profesores.component';
import { EditProfesorComponent } from './components/edit-profesor/edit-profesor.component';
import { RegistrarCursoComponent } from './components/registrar-curso/registrar-curso.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    RegistrarAlumnoComponent,
    LoginAdminComponent,
    HomeComponent,
    ListarAlumnosComponent,
    EditAlumnosComponent,
    SignupAdminComponent,
    RegistrarProfesorComponent,
    ListarProfesoresComponent,
    EditProfesorComponent,
    RegistrarCursoComponent,
    EditCursoComponent,
    ListarCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
