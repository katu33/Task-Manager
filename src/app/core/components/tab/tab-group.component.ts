import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@Component({
    selector: 'tab-group',
    template: `
        <ul class="tab-header">
            <li *ngFor="let item of tabPanelList; let i = index" (click)="setTabActiveIndex(i)" [ngClass]="{'active': i === tabActiveIndex}">
                {{item.title}}
            </li>
        </ul>

        <div class="tab-body">
            <div *ngFor="let item of tabPanelList; let i = index">
                <ng-container *ngIf="i === tabActiveIndex">
                    <ng-template *ngTemplateOutlet="item.implicitBody"></ng-template>
                </ng-container>
            </div>
        </div>
    `
})

export class TabGroupComponent {
    tabActiveIndex: number = 0;

    @ContentChildren(TabPanelComponent) tabPanelList: QueryList<TabPanelComponent>;

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log(this.tabPanelList);
    }

    setTabActiveIndex(index: number) {
        this.tabActiveIndex = index;
    }
}