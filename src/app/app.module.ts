import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Imports Material

import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobCardComponent } from './components/job-card/job-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProyectsCardComponent } from './components/proyects-card/proyects-card.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor-service.service';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './components/dialogc/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { ImgdialogComponent } from './components/imgdialog/imgdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ImageButtonComponent,
    JobCardComponent,
    NavBarComponent,
    EducationCardComponent,
    SkillsCardComponent,
    ProyectsCardComponent,
    LoginComponent,
    PortfolioComponent,
    DialogComponent,
    ProfileComponent,
    SkillItemComponent,
    FileUploaderComponent,
    ImgdialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FileUploadModule,

  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true,},
    {provide: LocationStrategy,useClass:HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
