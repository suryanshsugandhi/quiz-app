import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { NavigationComponent } from './navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'questions', component: QuestionComponent },

  { path: '**', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    RulesComponent,
    QuestionComponent,
    ScoreComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
