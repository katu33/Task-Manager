import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleSelect } from './multiple-select.component';
import { MultipleSelectOptionComponent } from './multiple-select-option.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MultipleSelect, MultipleSelectOptionComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [MultipleSelect, MultipleSelectOptionComponent],
})
export class MultipleSelectModule { }
