import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class RightSheet {
    isOpen: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    componentRef: ComponentRef<unknown>;

    constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private applicationRef: ApplicationRef) {}

    open(component, data?: any) {
        this.close();
        const componentFactory = this.cfr.resolveComponentFactory(component);
        this.componentRef = componentFactory.create(this.injector);
        this.applicationRef.attachView(this.componentRef.hostView);
        document.body.appendChild(this.componentRef.location.nativeElement);    

        data && this.isOpen.next(data);
    }

    close() {
        if(this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = undefined;
            this.isOpen.next(null);
        }
    }
}