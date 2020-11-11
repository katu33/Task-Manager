import { Component } from '@angular/core';
import { RightSheet } from './RightSheet';

@Component({
    selector: 'sheet-window',
    template: `
        <div class="sheet">
            <div class="sheet-bg"></div>
            <div class="sheet-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./sheet.scss']
})

export class SheetWindowComponent {
    constructor(private rightSheet: RightSheet) {
        this.rightSheet.close();
    }
}