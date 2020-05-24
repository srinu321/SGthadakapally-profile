import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent,
    LeftSideComponent,
    AboutComponent,
    CareerComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
