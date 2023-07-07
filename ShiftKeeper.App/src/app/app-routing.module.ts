import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { CompanyComponent } from './company/company/company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { CalendarScreenComponent } from './calendar/calendar-screen/calendar-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'user', children:[
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'manageUser', component:ManageUserComponent},
    { path: 'calendar/:id', component:CalendarScreenComponent}
  ]},
  { path: 'company', canActivate:[AuthGuard] , children:[
    { path: 'edit/:id', component: EditCompanyComponent},
    { path: ':id', component: CompanyComponent},
    { path: 'calendar/:id', component:CalendarScreenComponent}
  ]},
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
