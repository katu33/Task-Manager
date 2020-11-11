import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RightSheet } from 'src/app/core/components/right-sheet/RightSheet';
import { ItfSubTask, ItfTask, StatusTask, StatusTaskType } from 'src/app/interface/task';
import { TaskService } from '../../task.service';
import { PopupFileComponent } from './popup-file/popup-file.component';

@Component({
  selector: 'app-popup-create-task-group-item',
  templateUrl: './popup-create-task-group-item.component.html',
  styleUrls: ['./popup-create-task-group-item.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(50%)' }),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class PopupCreateTaskGroupItemComponent implements OnInit {
  taskDetailt: ItfTask;
  isZoom: boolean = false;

  formSubTask: FormGroup;
  statusTask: StatusTask[];

  isChoosePopup: boolean = false;

  constructor(
    private rightSheet: RightSheet, 
    private formBuilder: FormBuilder, 
    private taskService: TaskService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getTaskDetailt();
    this.setValueFormSubTask();
    this.statusTask = this.taskService.getStatusTask;
   
  }

  setValueFormSubTask() {
    this.rightSheet.isOpen.subscribe(res => {
      this.setFieldformValue('title', res.title);
      this.setFieldformValue('desc', res.desc);
      this.setFieldformValue('status', res.status);
    });
  }

  getTaskDetailt() {
    this.taskService.taskDetailt$.subscribe(res => {
      this.taskDetailt = res;
    })
  }

  initForm() {
    this.formSubTask = this.formBuilder.group({
      title: [''],
      desc: [''],
      status: [''],
      attach: []
    }); 
  }
  
  selectStatus(status: StatusTaskType) {
    this.formSubTask.get('status').setValue(status);
  }

  // Dialog

  zoomPopup() {
    this.isZoom = !this.isZoom;
  }

  closePopup() {
    this.rightSheet.close();
  }

  toggleChoosePopup() {
    this.isChoosePopup = !this.isChoosePopup;
  }

  openPopupFile() {
    const dialogRef = this.dialog.open(PopupFileComponent);
    dialogRef.afterClosed().subscribe(data => {
      this.setFieldformValue('attach', data);
    });
  }

  // util 
  
  getFieldFormValue(key: string) {
    return this.formSubTask.get(key).value;
  }

  setFieldformValue(key: string, value: any) {
    this.formSubTask.get(key).setValue(value);
  }
}
