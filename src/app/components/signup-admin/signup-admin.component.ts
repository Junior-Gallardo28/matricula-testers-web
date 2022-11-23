import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  
  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      id: 0,
      usuario:[''],
      password:[''],
      email:[''],
      numero:['']
    })
  }

  signUp(){

    this.http.post<any>("http://localhost:3000/admin", this.signupForm.value)
    .subscribe((res)=>{
      alert("Registrado exitosamente");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Algo salió mal")
    })
  }

}
