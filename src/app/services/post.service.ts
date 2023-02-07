import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  saveNewPost(postObj: any){
    return new Promise((resolve, rej) => {
      this.http.post('http://localhost:4200/posts', postObj).subscribe(
        (res)=>{resolve(res)},
        (err)=>{rej(err)}
      )
    });
  }
}
