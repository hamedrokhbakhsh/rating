import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultPageComponent} from './result-page/result-page.component';
import {QuestionComponent} from './question/question.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/question' ,
    pathMatch: 'full'
  },
  {
    path: 'question' ,
    component: QuestionComponent
  },
  {
    path: 'result',
    component: ResultPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
