import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CsBannerComponent } from './cs-banner/cs-banner.component';
import { CsButtonComponent } from './cs-button/cs-button.component';
import {
  CsLandingCardComponent,
} from './cs-landing-card/cs-landing-card.component';

@NgModule({
  declarations: [
    CsButtonComponent,
    CsBannerComponent,
    CsLandingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CsButtonComponent,
    CsBannerComponent,
    CsLandingCardComponent
  ]
})
export class ComponentsModule { }
