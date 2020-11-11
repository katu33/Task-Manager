import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItfTask, StatusTaskType } from 'src/app/interface/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-group',
  template: `
    <div class="tasks">
        <div class="task" *ngFor="let task of tasks$ | async">
            <app-task-item [task]="task"></app-task-item>
        </div>
    </div>
  `,
  styleUrls: ['./../../../my-job/my-job.component.scss']
})
export class TaskGroupComponent implements OnInit {
    tasks$: Observable<ItfTask[]>;
    constructor(private taskService: TaskService) { }
  
    ngOnInit(): void {
        this.taskService.getTaskApi();
        this.tasks$ = this.taskService.tasks$;
    }
}
