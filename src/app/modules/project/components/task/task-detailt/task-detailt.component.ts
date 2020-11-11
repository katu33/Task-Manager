import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'src/app/core/components/modal/modal';
import { RightSheet } from 'src/app/core/components/right-sheet/RightSheet';
import { ItfTask } from 'src/app/interface/task';
import { TaskService } from '../task.service';
import { PopupCreateTaskGroupItemComponent } from './popup-create-task-group-item/popup-create-task-group-item.component';
import { PopupCreateTaskGroupComponent } from './popup-create-task-group/popup-create-task-group.component';

@Component({
  selector: 'app-task-detailt',
  templateUrl: './task-detailt.component.html',
  styleUrls: ['./task-detailt.component.scss']
})
export class TaskDetailtComponent implements OnInit {
  @ViewChild('chat', { read: ElementRef }) chat: ElementRef<unknown>;

  task: ItfTask;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(window.pageYOffset > 50) {
      (this.chat.nativeElement as HTMLElement).classList.add('active');
    } else {
      (this.chat.nativeElement as HTMLElement).classList.remove('active');
    }
  }

  constructor(
    public dialog: MatDialog, 
    private activatedRoute: ActivatedRoute, 
    private taskService: TaskService, 
    private rightSheet: RightSheet
  ) { }

  ngOnInit(): void {
    this.getTaskDetails();
    this.taskService.taskDetailt$.subscribe(res => {
      console.log(res);
      
      this.task = res;
    })
  }

  getTaskDetails() {
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.taskService.getTaskApiById(params.id);
      }
    })
  }

  onCreateGroup() {
    this.rightSheet.open(PopupCreateTaskGroupItemComponent);
  }
}
