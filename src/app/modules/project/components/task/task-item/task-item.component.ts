import { Component, Input, OnInit } from '@angular/core';
import { ItfTask } from 'src/app/interface/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./../../../my-job/my-job.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ItfTask;
  constructor() { }

  ngOnInit(): void {
  }

}
