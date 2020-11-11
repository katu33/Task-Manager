import { Component, ContentChild, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'kp-option',
    template: `
        <ng-content></ng-content>
    
    `
})

export class MultipleSelectOptionComponent {
    @Input() data;
}