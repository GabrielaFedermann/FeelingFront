import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: UserModel = new UserModel();
  password: string;
  type: string;

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.password = event.target.value;
  }

  typeUser(event: any) {
    this.type = event.target.value;
  }

  register() {
    this.user.type = this.type;

    if (this.user.password != this.password) {
      alert('As senhas não coincidem');
    } else {
      this.auth.register(this.user).subscribe((resp: UserModel) => {
        this.user = resp;
        this.route.navigate(['/entrar']);
        alert('Usuário cadastrado com sucesso');
      });
    }
  }
}
