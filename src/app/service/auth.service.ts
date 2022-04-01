import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLoginDTO } from "../model/UserLoginDTO";
import { UserModel } from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}

  enter(userLogin: UserLoginDTO): Observable<UserLoginDTO>{
    return this.http.post<UserLoginDTO>('https://genfeeling.herokuapp.com/user/login', userLogin)
  }

  register(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://genfeeling.herokuapp.com/user/register', user)
  }
}
