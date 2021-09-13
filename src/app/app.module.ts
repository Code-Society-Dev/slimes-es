import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  CsBannerComponent,
} from 'src/app/components/cs-banner/cs-banner.component';
import {
  CsLandingCardComponent,
} from 'src/app/components/cs-landing-card/cs-landing-card.component';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent,
    CsLandingCardComponent,
    CsBannerComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
