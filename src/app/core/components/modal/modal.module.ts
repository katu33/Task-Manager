import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './modal';
import { ModalWindowComponent } from './modal-window';

@NgModule({
  declarations: [ModalWindowComponent],
  entryComponents: [ModalWindowComponent],
  imports: [
    CommonModule,
  ],
  providers: [Modal]
})
export class ModalModule { }
