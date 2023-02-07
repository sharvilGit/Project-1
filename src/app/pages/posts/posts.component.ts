import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
//import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //private storage: AngularFireStorage
  constructor(public userService: UserService, private router: Router, public postService: PostService) { }

  selectedFile: any;
  text = "";
  posts: Array<any> = [];

  ngOnInit() {
    if(this.userService.user == undefined || this.userService.user == null){
      //taking user from localStorage
      let str = localStorage.getItem('user');
      if(str != null){
        this.userService.user = JSON.parse(str);
      }else{
        this.router.navigate(['/login']); 
      }
    }
  }

  postSchema = {
    userName: '',
    imgURL: '',
    text: '',
    likes: [],
    comments: [{userName: '', comment: ''}]
  };

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  likes(postId: any){
    console.log("liked");
    
    // for(let i=0; i<this.posts.length; i++){
    //   if(this.posts[i].id == postId){
    //     if(this.posts[i].likes.indexOf(this.userService.user.id) >= 0){
    //       this.posts[i].likes.splice(this.posts[i].likes.indexOf(this.userService.user.id), 1);
    //     }else{
    //       this.posts[i].likes.push(this.userService.user.id)
    //     }
    //   }
    // }
  }

  post(){
    console.log('clicked');
    
    if(this.selectedFile != undefined || this.selectedFile != null){
      this.uploadImage().then((imageURL) => {
        console.log(imageURL);
        let postObj = {
          userName: this.userService.user.userName,
          imgURL: imageURL,
          text: this.text,
          likes: [],
          comments: []
        };
        this.posts.push(postObj);
        this.postService.saveNewPost(postObj).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  uploadImage(){
    return new Promise((res, rej) => {
      let n = Date.now();
      const file = this.selectedFile;
      const filePath = `images/${n}`;
      //const fileRef = this.storage.ref(filePath);
      //const task = this.storage.upload(`images/${n}`, file);
      // task.snapshotChanges().pipe(
      //   finalize(() => {
      //     let imageURL = fileRef.getDownloadURL();
      //     imageURL.subscribe((url: any) => {
      //       if(url){
      //         console.log(url);
      //         res(url)
      //       }
      //     })
      //   })
      // ).subscribe(
      //   (url) => {
      //     if(url){
      //       console.log(url);
      //     }
      //   }
      // )
    });
  }

}
