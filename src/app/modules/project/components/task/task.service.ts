import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItfSubTask, ItfTask, StatusTaskType, ColorStatusTaskType, StatusTask } from 'src/app/interface/task';
import { FileBase64 } from './task-created/step-one/step-one.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  _close$ = new Subject<boolean>();
  close$ = this._close$.asObservable();

  stepOne: BehaviorSubject<object> = new BehaviorSubject<object>(null);
  steptwo: BehaviorSubject<object> = new BehaviorSubject<object>(null);

  private task: BehaviorSubject<object> = new BehaviorSubject<object>(null);
  task$: Observable<object> = this.task.asObservable();

  private tasks: BehaviorSubject<ItfTask[]> = new BehaviorSubject<ItfTask[]>(null);
  tasks$: Observable<ItfTask[]> = this.tasks.asObservable();

  private taskDetailt: BehaviorSubject<ItfTask> = new BehaviorSubject<ItfTask>(null);
  taskDetailt$: Observable<ItfTask> = this.taskDetailt.asObservable();

  private subTaskDetailt: BehaviorSubject<ItfSubTask> = new BehaviorSubject<ItfSubTask>(null);
  subTaskDetailt$: Observable<ItfSubTask> = this.subTaskDetailt.asObservable();

  fileBase64: BehaviorSubject<FileBase64[]> = new BehaviorSubject<FileBase64[]>([]);
  fileBase64$ = this.fileBase64.asObservable();

  constructor(private http: HttpClient) { }

  // =================== Step Form
  setTask() {
    const task = {...this.stepOne.getValue(), ...this.steptwo.getValue() }
    this.task.next(task);
  }

  get getTask(): Observable<object> {
    return this.task$;
  }

  setStepOne(data: object) {
    console.log(this.task);
    this.stepOne.next(data);
  }

  setStepTwo(data: object) {
    console.log(this.task);
    this.steptwo.next(data);
  }

  // =================== Get Api
  addTaskApi() {
    this.task.subscribe((res: ItfTask) => {
      const newTasks = [...[res], ...this.tasks.getValue()];
      this.tasks.next(newTasks);
    });
  }

  getTaskApi() {
    if(!this.tasks.getValue()) {
      this.http.get<ItfTask[]>('http://localhost:3004/tasks').subscribe(res => {
        console.log(res);
        this.tasks.next(res);
      });
    }
  }

  getTaskApiById(id) {
    if(id) {
      this.http.get<ItfTask[]>(`http://localhost:3004/tasks?_id=${id}`).pipe(
        map(tasks => tasks[0])
      ).subscribe((res: ItfTask) => {
        this.taskDetailt.next(res);
      })
    }
  }

  getGroupSubTaskApi(): Observable<ItfSubTask[]> {
    return this.http.get<ItfSubTask[]>('http://localhost:3004/SubTasks');
  }

  getSubTaskApiById(id) {
    if(id) {
      this.http.get<ItfSubTask[]>(`http://localhost:3004/SubTasks?_id=${id}`).pipe(
        map(tasks => tasks[0])
      ).subscribe((res: ItfSubTask) => {
        this.subTaskDetailt.next(res);
      })
    }
  }

  // =================== Modal
  setClose() {
    this._close$.next(true);
  }

  
  get getStatusTask(): StatusTask[] {
    return [
      {
        title: StatusTaskType.HAS_NOT_YET_START,
        className: 'not-start'
      },
      {
        title: StatusTaskType.IN_PROCESS,
        className: 'in-process'
      },
      {
        title: StatusTaskType.FINISH,
        className: 'finish'
      },
      {
        title: StatusTaskType.PAUSED,
        className: 'paused'
      }
    ]
  }
}
