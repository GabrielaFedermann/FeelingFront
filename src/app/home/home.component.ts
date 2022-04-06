import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { UserModel } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post: Post = new Post();
  posts: Post[];

  themeList: Theme[];
  theme: Theme = new Theme;
  idTheme: number;

  user: UserModel = new UserModel();
  idUser = environment.id;


  constructor(
    private route: Router,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService,

  ) { }


  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou :(  faça login novamente!! :) ');
      this.route.navigate(['/login']);
    }
    this.themeService.refreshToken();
    // this.authService.refreshToken();
    this.postService.refreshToken();
  }

  getAllTheme() {
    this.themeService.getAllTheme().subscribe((resp: Theme[]) => {
      this.themeList = resp;
    });
  }
  findByTheme() {
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: Theme) => {
      this.theme = resp;
    })
  }
  getAllPosts() {
    this.postService.getAllPost().subscribe((resp: Post[]) => {
      this.posts = resp;
    })
  }
  // findByIdUser(){
  //   this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel)=>{
  //     this.user = resp;
  //   })
  // }
  publish() {
    this.theme.id = this.idTheme;
    this.post.theme = this.theme;

    this.user.id = this.idUser;
    this.post.creator = this.user;

    this.postService.postPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Postagem realizada com sucesso!!! :D');

      this.getAllPosts();

      this.post = new Post();
    });
  }
}
