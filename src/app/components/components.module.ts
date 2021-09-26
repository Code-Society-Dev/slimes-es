import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CsBannerComponent } from './cs-banner/cs-banner.component';
import { CsButtonComponent } from './cs-button/cs-button.component';
import { CsHeaderComponent } from './cs-header/cs-header.component';
import {
  CsLandingCardComponent,
} from './cs-landing-card/cs-landing-card.component';

@NgModule({
  declarations: [
    CsButtonComponent,
    CsBannerComponent,
    CsHeaderComponent,
    CsLandingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CsButtonComponent,
    CsBannerComponent,
    CsHeaderComponent,
    CsLandingCardComponent
  ]
})
export class ComponentsModule { }
