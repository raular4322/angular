import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'authorized', component: AuthorizedComponent, data: { title: 'hola' }}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
