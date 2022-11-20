import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_URL: string = environment.base_URL;
 
  constructor()
{}  
}
