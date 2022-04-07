import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path: "", redirectTo:"entrar", pathMatch:"full"},
  {path:"entrar", component:EntrarComponent},
  {path:"cadastrar", component:CadastrarComponent},
  {path:"about", component:AboutComponent},
  {path:"home", component: HomeComponent},
  {path: "theme", component: ThemeComponent},
  {path: "theme-edit/:id", component: ThemeEditComponent},
  {path: "theme-delete/:id", component: ThemeDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
