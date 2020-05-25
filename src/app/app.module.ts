import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { VanguardComponent } from './vanguard/vanguard.component';
import { NationwideComponent } from './nationwide/nationwide.component';
import { GordianComponent } from './gordian/gordian.component';
import { CRSAComponent } from './crsa/crsa.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,

    ContactComponent,
    LeftSideComponent,
    AboutComponent,
    CareerComponent,
    SkillsComponent,
    ProjectsComponent,
    VanguardComponent,
    NationwideComponent,
    GordianComponent,
    CRSAComponent
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
