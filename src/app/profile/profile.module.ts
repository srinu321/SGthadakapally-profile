import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    ProfileRoutingModule

  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
