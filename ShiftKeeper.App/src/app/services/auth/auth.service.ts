import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3000/user';

  GetAll(){
    return this.http.get(this.apiUrl)
  }

  GetByEmail(email:any){
    return this.http.get(this.apiUrl+'/'+email)
  }

  Register(model:any){
    return this.http.post(this.apiUrl, model)
  }

  UpdateUser(id:any, model:any){
    return this.http.put(this.apiUrl+'/'+id, model)
  }

  IsloggedIn(){
    return sessionStorage.getItem('jwt')!=null;
  }
}
