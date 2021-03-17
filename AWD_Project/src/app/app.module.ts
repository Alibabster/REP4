import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './appHeader/header.component';
import {FormComponent} from './appForm/form.component';
import {ReportComponent} from './appForm/appFormReport/report.component';
import {FormsModule} from '@angular/forms';
import {SuccessSubmitComponent} from './appForm/successSubmit/successSubmit.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {NewsModule} from './news/news.module';
import {SignUpComponent} from './signUp/signUp.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './appServices/app.service';
import {AuthGuard} from './auth/auth.guard';
import {SignUpService} from './appServices/signUp.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'report', component: FormComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ReportComponent,
    SuccessSubmitComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    NotFoundComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    AppService,
    SignUpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
