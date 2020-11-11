import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-actions',
  templateUrl: './nav-actions.component.html',
  styleUrls: ['./nav-actions.component.scss']
})
export class NavActionsComponent implements OnInit {
  isInputSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onInputSearchMyWork(): void {
    this.isInputSearch = !this.isInputSearch;
  }

}
