import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateTimeService } from 'src/app/core/services/date-time.service';
import { ItfTask } from 'src/app/interface/task';
import { TaskService } from '../../task.service';
import { FileBase64 } from '../step-one/step-one.component';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  task: ItfTask;
  fileBase64$: Observable<FileBase64[]>;
  constructor(private taskService: TaskService, private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
    this.taskService.setTask();
    this.taskService.getTask.subscribe((res: ItfTask) => {
      console.log(res);
      res['end_at_txt'] = this.dateTimeService.getMonthTxt(res.end_at.getMonth()) + ' ' + res.end_at.getMonth();
      this.task = res;
    });
    this.fileBase64$ = this.taskService.fileBase64$;
  }

  createTask(): void {
    console.log(this.task);
    this.taskService.addTaskApi();
    this.taskService.setClose();
  }

}
