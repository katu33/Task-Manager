import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDetailtComponent } from './components/chat-detailt/chat-detailt.component';
import { TaskDetailtComponent } from './components/task/task-detailt/task-detailt.component';
import { HomeComponent } from './home/home.component';
import { MyJobComponent } from './my-job/my-job.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: '', component: MyJobComponent },
      { path: 'chat/:id', component: ChatDetailtComponent },
      { 
        path: 'task',
        children: [
          { path: 'detailt/:id', component: TaskDetailtComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
