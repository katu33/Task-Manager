import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSheet } from './RightSheet';
import { SheetWindowComponent } from './right-sheet.window';



@NgModule({
  declarations: [SheetWindowComponent],
  entryComponents: [SheetWindowComponent],
  imports: [
    CommonModule
  ],
  providers: [RightSheet]
})
export class RightSheetModule { }
