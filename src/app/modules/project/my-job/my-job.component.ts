import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ItfTask, StatusTaskType } from 'src/app/interface/task';
import { TaskCreatedComponent } from '../components/task/task-created/task-created.component';
import { TaskService } from '../components/task/task.service';

@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.scss']
})
export class MyJobComponent implements OnInit {
  tasks: ItfTask[] = [];
  componentRef: ComponentRef<TaskCreatedComponent>;

  @ViewChild('modal', { read: ViewContainerRef }) modalContainer: ViewContainerRef;
  
  constructor(private cfr: ComponentFactoryResolver, private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = new Array(10).fill({
      _id: '11d2102du102i1s',
      title: 'Mở rộng chi nhánh HTPC Mở rộng chi nhánh HTPC Mở rộng chi nhánh HTPC Mở rộng chi nhánh HTPC',
      status: StatusTaskType.HAS_NOT_YET_START,
      attach: [],
      comment: [],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste totam eaque ad tenetur incidunt, sed adipisci dolor quaerat corrupti dolore recusandae quo velit sequi, natus dolorum magnam! Odio, repudiandae.',
      management: [],
      notes: ['Lorem ipsum dolor sit amet consectetur adm! Odio, repudiandae.','Lorem ipsum dolor sit amet consectetur adm! Odio, repudiandae.','Lorem ipsum dolor sit amet consectetur adm! Odio, repudiandae.','Lorem ipsum dolor sit amet consectetur adm! Odio, repudiandae.'],
      groupSubTasks: [],
      subTasks: [],
      user_create: {},
      percent: 100,
      create_at: Date,
      end_at: Date,
      update_at: Date,
      delete_at: Date,
    })

    this.taskService.close$.subscribe((res: boolean) => {
      if(res) this.closeForm();
    });
  }

  openForm(): void {
    this.modalContainer.clear();
    const factory = this.cfr.resolveComponentFactory(TaskCreatedComponent);
    this.componentRef = this.modalContainer.createComponent(factory);
  }

  closeForm(): void {
    this.componentRef.destroy();
  }
}
