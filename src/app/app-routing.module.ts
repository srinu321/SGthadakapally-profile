import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [
 
  {
    path: 'profile/srinivas',
    component: ProfileComponent
  },{
    path: '**',
    component: ResumeComponent
  },
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
  })
],

  exports: [RouterModule]
})

export class AppRoutingModule { }
