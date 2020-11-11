import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ModalStack } from './modal-stack';

@Injectable({providedIn: 'root'})
export class Modal {
    constructor(private cfr: ComponentFactoryResolver, private modalStackService: ModalStack) {

    }
    open(content: any) {
        console.log(content);
        const ref = this.modalStackService.open(this.cfr, content);
    }

    close() {
        this.modalStackService.close();
    }
}