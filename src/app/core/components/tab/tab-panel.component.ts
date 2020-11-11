import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tab-panel',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
    `
})

export class TabPanelComponent {
    @Input() title: string;

    @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log(this.implicitBody);
        
    }
}