import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_URL: string = environment.base_URL;
 
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(admin: any) : Observable<any>{
    return this.http.post<any>(this.base_URL, admin);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  
}
