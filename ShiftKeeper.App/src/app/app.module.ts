import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { CompanyComponent } from './company/company/company.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { LogoutDialogComponent } from './user/logout-dialog/logout-dialog.component';
import { HomeComponent } from './home/home.component';
import { OwnedCompaniesComponent } from './navigation/owned-companies/owned-companies.component';
import { AddCompanyDialogComponent } from './company/add-company-dialog/add-company-dialog.component';
import { InfoSnacbarComponent } from './shared/info-snacbar/info-snacbar.component';
import { CalendarScreenComponent } from './calendar/calendar-screen/calendar-screen.component';
import { DateSelectorComponent } from './calendar/date-selector/date-selector.component';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { ImageUploaderComponent } from './shared/image-uploader/image-uploader.component';
import { UserScreenComponent } from './user/user-screen/user-screen.component';
import { UserNameLinkComponent } from './shared/user-name-link/user-name-link.component';
import { AddEventComponent } from './calendar/add-event/add-event.component';




const MatImports = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatDialogModule,
  MatTreeModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    WelcomeComponent,
    PricingComponent,
    NotFoundComponent,
    EditCompanyComponent,
    CompanyComponent,
    LoginComponent,
    RegisterComponent,
    ManageUserComponent,
    LogoutDialogComponent,
    HomeComponent,
    OwnedCompaniesComponent,
    AddCompanyDialogComponent,
    InfoSnacbarComponent,
    CalendarScreenComponent,
    DateSelectorComponent,
    CalendarEventComponent,
    ImageUploaderComponent,
    UserScreenComponent,
    UserNameLinkComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatImports
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
