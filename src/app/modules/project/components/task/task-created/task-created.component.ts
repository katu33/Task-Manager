import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UploadService } from 'src/app/core/services/upload.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-created',
  templateUrl: './task-created.component.html',
  styleUrls: ['./task-created.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-50%)' }),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TaskCreatedComponent implements OnInit {
  stepForm: string[] = ['Task Details', 'Management', 'Review'];
  stepCurrent: number = 0;

  fileUpload = [];

  constructor(private uploadService: UploadService, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.taskService.setClose();
  }

  selectFileDrop(event) {
    console.log(event);
    const promiseBase64 = this.uploadService.convertImageToBase64(event);
    Promise.all(promiseBase64).then(res => {
      this.fileUpload = [...res];
    });
  }

  nextStep() {
    if(this.stepCurrent < this.stepForm.length) {
      this.stepCurrent += 1;
    }
  }
}
