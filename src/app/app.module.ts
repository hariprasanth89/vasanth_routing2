import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './nopage.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DataService } from './data.service';
import { RegistrationComponent } from './registration/registration.component';

/*const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'users', component: UsersComponent, data: { title: 'Heroes List' } },
  { path: 'users/:abc', component: UserComponent },
  { path: 'hello', component: HelloComponent },
  { path: '',   redirectTo: '/hello', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];*/

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, data: { title: 'Heroes List' } },
  { path: 'user/:uname', component: UserComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )],
  declarations: [AppComponent, RegistrationComponent, UsersComponent, UserComponent, PageNotFoundComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
