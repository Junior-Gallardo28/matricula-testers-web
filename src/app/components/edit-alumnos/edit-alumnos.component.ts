import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosServicesService } from '../../services/alumnos-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-alumnos',
  templateUrl: './edit-alumnos.component.html',
  styleUrls: ['./edit-alumnos.component.css']
})
export class EditAlumnosComponent implements OnInit {
  myForm!: FormGroup;
  alumno!: Alumno;
  idAlumno!: any;
  
  constructor(
    private fb: FormBuilder,
    private alumnoService: AlumnosServicesService,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(){
    this.idAlumno = this.route.snapshot.paramMap.get('id');
    this.alumnoService.getAlumnoId(this.idAlumno).subscribe((data) => {
      this.alumno = data;
      this.myForm = this.fb.group({
        id: this.idAlumno,
        nombres:[this.alumno.nombres, Validators.required],
        apellidos:[this.alumno.apellidos, Validators.required],
        dni:[this.alumno.dni, Validators.required],
        codigo:[this.alumno.codigo, Validators.required],
      });
    });
  }

  updateAlumno(): void{
    const alumno: Alumno = {
      id: this.idAlumno,
      nombres: this.myForm.get('nombres')!.value,
      apellidos: this.myForm.get('apellidos')!.value,
      dni: this.myForm.get('dni')!.value,
      codigo: this.myForm.get('codigo')!.value
    };
    this.alumnoService.
    updateAlumno(this.idAlumno, alumno).
    subscribe({
      next: (data) =>{
        this.snackbar.open('El alumno fue actualizado con exito!', '',{
          duration: 6000,
        });
        this.router.navigate(['/']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
