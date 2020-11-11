import { Component } from '@angular/core';

@Component({
    selector: 'modal-window',
    template: `
        <div class="modal-dialog">
            <div class="modal-bg"></div>
            <div class="mocal-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./modal.scss']
})

export class ModalWindowComponent {

}