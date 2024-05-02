import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  getUser() :Observable<User[]>{
    return this.http.get<User[]>('http://localhost:5258/api/User');
   }

   getByIdUser(id:number) :Observable<User>{
     return this.http.get<User>('http://localhost:5258/api/User/'+id);
    }

   postUser(user: User):Observable<User>{
     return this.http.post<User>('http://localhost:5258/api/User', user);
   }

   putUser(user: User): Observable<User>{
     return this.http.put<User>('http://localhost:5258/api/User', user);
   }

   deletecByIdUser(id:number) :Observable<User>{
     return this.http.delete<User>('http://localhost:5258/api/User/'+id);
    }

}
