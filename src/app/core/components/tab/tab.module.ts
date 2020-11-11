import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group.component';
import { TabPanelComponent } from './tab-panel.component';



@NgModule({
  declarations: [
    TabPanelComponent,
    TabGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabPanelComponent,
    TabGroupComponent
  ]
})
export class TabModule { }
