import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNuevaPageRoutingModule } from './tab-nueva-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabNuevaPage } from './tab-nueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNuevaPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [TabNuevaPage]
})
export class TabNuevaPageModule {}
