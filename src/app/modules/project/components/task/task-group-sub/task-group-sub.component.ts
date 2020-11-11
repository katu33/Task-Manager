import { Component, OnInit } from '@angular/core';
import { RightSheet } from 'src/app/core/components/right-sheet/RightSheet';
import { ColorStatusTaskType, ItfSubTask, StatusTaskType } from 'src/app/interface/task';
import { PopupCreateTaskGroupItemComponent } from '../task-detailt/popup-create-task-group-item/popup-create-task-group-item.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-sub-group',
  templateUrl: './task-group-sub.component.html',
  styleUrls: ['./task-group-sub.component.scss']
})
export class TaskGroupSubComponent implements OnInit {
  taskTitle: string[] = ['Progress', 'Project Name', 'Team', 'Status', 'Creation Date', 'Files', 'Messages', 'Subtasks', 'Add SubTasks']
  taskGroup: ItfSubTask[];
  percent = 100;
  constructor(private rightSheet: RightSheet, private taskService: TaskService) { }

  ngOnInit(): void {
    this.getSubTask();
  }

  getSubTask() {
    this.taskService.getGroupSubTaskApi().subscribe((res: ItfSubTask[]) => {
      this.taskGroup = res;
    });
  }

  selectPage(page) {
    console.log(page);
    
  }

  getColorStatus(status: StatusTaskType): ColorStatusTaskType {
    if(status === StatusTaskType.FINISH) return ColorStatusTaskType.FINISH;
    if(status === StatusTaskType.HAS_NOT_YET_START) return ColorStatusTaskType.HAS_NOT_YET_START;
    if(status === StatusTaskType.IN_PROCESS) return ColorStatusTaskType.IN_PROCESS;
    if(status === StatusTaskType.PAUSED) return ColorStatusTaskType.PAUSED;
  }

  onOpen(SubTask: ItfSubTask) {
    this.rightSheet.open(PopupCreateTaskGroupItemComponent, SubTask);
  }
}
