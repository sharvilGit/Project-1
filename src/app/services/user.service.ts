import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(dataObj: any) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users', dataObj).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      )
    });
  }
  
  public getUser(email){
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:3000/users?email" + email).subscribe(
        (res) => { resolve(res)},
        (err) => { reject(err);}
      )
    });
  }

}
