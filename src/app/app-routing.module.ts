import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ResultComponent} from "./features/result/result.component";
import {RegisterComponent} from "./features/register/register.component";
import {AuthComponent} from "./core/auth/auth/auth.component";
import {QuestionlistComponent} from "./features/questionlist/questionlist.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {HomePageComponent} from "./features/home-page/home-page.component";
import { DenemeComponent } from './deneme/deneme/deneme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'Result', component: ResultComponent },
  { path: 'Questionlist', component: QuestionlistComponent },
  { path: 'Result', component: ResultComponent },
  { path: '', component: HomePageComponent , },//RegisterComponent
  // { path: 'products/:productId', component: ProductComponent },
  { path: 'auth', component:AuthComponent},
  { path: 'pro', component:ProfileComponent},
  { path: 'den', component:DenemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
