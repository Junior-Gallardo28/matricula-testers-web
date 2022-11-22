import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(
  
  ) { }

  ngOnInit(): void {
    

  }

  

}
