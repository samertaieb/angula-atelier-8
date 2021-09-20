import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'src/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  usersUrl='api/users'

  constructor(private http:HttpClient) {
    
   }
   ////// services http////////
  getUsers(){
    return this.http.get<Utilisateur[]>(this.usersUrl)
  }
  getUserById(id:any){
    return this.http.get<Utilisateur[]>(this.usersUrl+'/'+id)
  }

  deleteUser (id: any): Observable<Utilisateur> {
    const url=this.usersUrl+'/'+id;
    return this.http.delete<Utilisateur>(url);
    }
    addUser (user: Utilisateur): Observable<Utilisateur> {
      return this.http.post<Utilisateur>(this.usersUrl, user);
    }
    updateUser (user: Utilisateur,id: string): Observable<Utilisateur> {
        const url=this.usersUrl+'/'+id;
        return this.http.put<Utilisateur>(url,user);
    }
///////////// services login inscri home //////////

      register(List:any[],user:any){
    List.push(user) 
    return List;
      }
    
}
