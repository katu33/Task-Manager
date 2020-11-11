import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalWindowComponent } from './modal-window';

@Injectable({providedIn: 'root'})
export class ModalStack {
    moduleCFR: ComponentFactoryResolver;
    cpnRef: ComponentRef<ModalWindowComponent>;
    constructor(private applicationRef: ApplicationRef, private _injector: Injector) {}

    open(cfr: ComponentFactoryResolver, content: any) {
        this.moduleCFR = cfr;
        this.getContentRef(content);
        
    }

    private getContentRef(content: any) {
        console.log(content instanceof TemplateRef);
        if(content instanceof TemplateRef) {
            this.createTemplateRef(content);
        }
    }

    private createTemplateRef(content: TemplateRef<unknown>) {
        //createEmbeddedView : tạo viewRef từ template
        this.close();

        const viewRef = content.createEmbeddedView(null);
        // this.applicationRef.attachView(viewRef); // attach view vào application

        const factory = this.moduleCFR.resolveComponentFactory(ModalWindowComponent); // tạo component factory
 
        this.cpnRef = factory.create(this._injector, [viewRef.rootNodes]); // tạo 1 componentRef từ component factory
        console.log(this.cpnRef);
        
        this.applicationRef.attachView(this.cpnRef.hostView); // attach view vào application

        document.body.appendChild(this.cpnRef.location.nativeElement);
    }

    close() {
        if(this.cpnRef) this.cpnRef.destroy();
    }
}