import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[fileDrop]'
})

export class FileDropDirective {
    @Output() filesDropped = new EventEmitter<FileList>();

    constructor() {
        console.log('123123123')
    }

    @HostListener('drop', ['$event'])
        onDrop(event) {
            event.preventDefault();
            this.filesDropped.emit(event.dataTransfer.files);
        }

    @HostListener('dragover', ['$event'])
        onDrapOver(event) {
            event.preventDefault();
            console.log(event, 'kéo vào');
            
        }
    
    @HostListener('dragleave', ['$event'])
        onDrapLeave(event) {
            event.preventDefault();
            console.log(event, 'no');
            
        }
}