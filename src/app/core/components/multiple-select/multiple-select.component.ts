import { Component, ContentChild, ContentChildren, EventEmitter, Output, QueryList, ViewChild } from '@angular/core';
import { MultipleSelectOptionComponent } from './multiple-select-option.component';

export interface SearchItem {
    _id: string;
    avatar: string;
    username: string;
    active?: boolean;
}

@Component({
    selector: 'kp-select',
    template: `
        <div class="select">
            <div class="select-head" (click)="handleShowOption($event)">
                <div class="select-search">
                    <div class="select-search-item user" *ngFor="let item of searchItem">
                        <img [src]="item.avatar" alt="">
                        <span>{{item.username}}</span>
                        <mat-icon (click) = "selectResultSearch(item)">close</mat-icon>
                    </div>
                </div>
                <mat-icon class="icon-down">keyboard_arrow_down</mat-icon>
            </div>
            <div class="select-option" *ngIf="showOption">
                <input type="text">
                <div 
                    class="item user" 
                    *ngFor="let item of options; let i = index" 
                    [ngClass]="{'active': item.data.active}"
                    (click) = "selectResultSearch(item.data)"
                >
                    <img [src]="item.data.avatar" alt="">
                    <span>{{item.data.username}}</span>

                    <mat-icon class="done" *ngIf="item.data.active">done</mat-icon>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./select.scss']
})

export class MultipleSelect {
    showOption: boolean =false;
    currentOption: number = 0;
    searchItem: SearchItem[] = [];

    @Output() users = new EventEmitter();
    @ContentChildren(MultipleSelectOptionComponent) options: QueryList<MultipleSelectOptionComponent>;

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log(this.options);
    }

    handleShowOption(event) {
        const result = event.path.find(element => {
            if(element.classList && element.classList.contains('select-search-item')) return element;
        });

        if(result) return;

        this.showOption = !this.showOption;
    }

    selectResultSearch(user: SearchItem) {
        for(let i = 0; i < this.searchItem.length; i++) {
            if(this.searchItem[i]._id == user._id) {
                this.searchItem.splice(i, 1);
                this.users.emit(this.searchItem);
                user['active'] = false;
                return;
            }
        }
        this.searchItem.push(user);
        this.users.emit(this.searchItem);
        user['active'] = true;
    }
}