import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';

@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styleUrls: ['./edit-profesor.component.css']
})
export class EditProfesorComponent implements OnInit {
  myForm!: FormGroup;
  profesor!: Profesor;
  idProfesor!: any;
  constructor(
    private fb: FormBuilder,
    private profesorService: ProfesorService,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loadProfesor();
  }

  loadProfesor(){
    this.idProfesor = this.route.snapshot.paramMap.get('id');
    this.profesorService.getProfesorId(this.idProfesor).subscribe((data)=>{
      this.profesor = data;
      this.myForm = this.fb.group({
        id: this.idProfesor,
        nombres:[this.profesor.nombres, Validators.required],
        apellidos:[this.profesor.apellidos, Validators.required],
        dni:[this.profesor.dni, [Validators.required,Validators.maxLength(8)]],
        codigo:[this.profesor.codigo,  [Validators.required, Validators.maxLength(8)]],
      });
    });
  }

  updateProfesor(): void{
    const profesor: Profesor = {
      id: this.idProfesor,
      nombres: this.myForm.get('nombres')!.value,
      apellidos: this.myForm.get('apellidos')!.value,
      dni: this.myForm.get('dni')!.value,
      codigo: this.myForm.get('codigo')!.value
    };
    this.profesorService.
    updateProfesor(this.idProfesor, profesor).
    subscribe({
      next: (data) =>{
        this.snackbar.open('El profesor fue actualizado con exito!','',{
          duration:6000,
        });
        this.router.navigate(['/']);
      },
      error: (err) =>{
        console.log(err);
      }
    })
    
  }
}
