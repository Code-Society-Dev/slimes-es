import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { ContributorsComponent } from './contributors/contributors.component';
import { ExploreComponent } from './explore/explore.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    GalleryComponent,
    ProfileComponent,
    ExploreComponent,
    ContributorsComponent
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    GalleryComponent,
    ProfileComponent,
    ExploreComponent,
    ContributorsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
