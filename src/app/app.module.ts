import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import {NgxStarRatingModule} from 'ngx-star-rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import { HeaderComponent } from './header/header.component';
import { ResultPageComponent } from './result-page/result-page.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
