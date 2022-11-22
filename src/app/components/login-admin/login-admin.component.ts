import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router
    , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      usuario:[''],
      password: [''],

    })

  }

  login() {
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe((res)=>{
      const user = res.find((a:any) => {
        return a.usuario === this.loginForm.value.usuario && a.password === this.loginForm.value.password
      });
      if(user) {
        //alert("Registrado exitosamente");
        this.snackBar.open('Registrado exitosamente', '', {
          duration: 1000,
        });
        this.loginForm.reset();
        this.router.navigate(['/'])
      } 

      else{

        this.snackBar.open('El usuario no fue encontrado', '', {
          duration: 3000,
        });

      }
    },err => {
      alert("Algo salió mal")
      })
  }
}
