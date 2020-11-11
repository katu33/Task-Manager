import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { StatusTaskType } from './../../../../../../interface/task';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./../task-created.component.scss']
})
export class StepTwoComponent implements OnInit {
  formStepTwo: FormGroup;

  @Output() onClose$ = new EventEmitter();
  @Output() onProceed = new EventEmitter();

  taskStatus = [
    { title: StatusTaskType.HAS_NOT_YET_START, class: 'color-orange' },
    { title: StatusTaskType.PAUSED, class: 'color-blue' },
    { title: StatusTaskType.IN_PROCESS, class: 'color-yellow' },
    { title: StatusTaskType.FINISH, class: 'color-green' }
  ]

  currentTaskStatus: number = 0;

  users = [
    { _id: "1n9d11d2i1d1m2", avatar: "https://picsum.photos/200/300.webp", username: "username" },
    { _id: "1n9d11d2i1d1m3", avatar: "https://picsum.photos/200/301.webp", username: "username" },
    { _id: "1n9d11d2i1d1m4", avatar: "https://picsum.photos/200/302.webp", username: "username" },
    { _id: "1n9d11d2i1d1m5", avatar: "https://picsum.photos/200/303.webp", username: "username" },
    { _id: "1n9d11d2i1d1m6", avatar: "https://picsum.photos/200/304.webp", username: "username" },
    { _id: "1n9d11d2i1d1m7", avatar: "https://picsum.photos/200/305.webp", username: "username" },
    { _id: "1n9d11d2i1d1m8", avatar: "https://picsum.photos/200/306.webp", username: "username" },
    { _id: "1n9d11d2i1d1m9", avatar: "https://picsum.photos/200/307.webp", username: "username" },
    { _id: "1n9d11d2i1d1m10", avatar: "https://picsum.photos/200/308.webp", username: "username" }
  ]
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.formStepTwo = this.formBuilder.group({
      management: [[], [Validators.required]],
      status: [this.taskStatus[this.currentTaskStatus].title],
      notes: ['', Validators.required],
      percent: [100]
    });
  }

  selectTaskStatus(index: number) {
    this.currentTaskStatus = index;
    this.formStepTwo.get('status').setValue(this.taskStatus[this.currentTaskStatus].title);
  }

  onClose() { 
    this.onClose$.emit();
  }

  handleProceed(): void {
    this.taskService.setStepTwo(this.formStepTwo.value);
    this.onProceed.next(true);
  }

  getUsers(data) {
    this.formStepTwo.get('management').setValue(data);
  }

}
