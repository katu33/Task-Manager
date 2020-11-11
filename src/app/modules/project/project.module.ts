import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TabModule } from 'src/app/core/components/tab/tab.module';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

import { FileDropDirective } from 'src/app/core/directives/file-drop.directive';
import { ProjectComponent } from './project.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavActionsComponent } from './components/navigation/nav-actions/nav-actions.component';
import { NavProjectComponent } from './components/navigation/nav-project/nav-project.component';
import { ChatDetailtComponent } from './components/chat-detailt/chat-detailt.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailtComponent } from './components/task/task-detailt/task-detailt.component';
import { TaskCreatedComponent } from './components/task/task-created/task-created.component';
import { StepOneComponent } from './components/task/task-created/step-one/step-one.component';
import { StepTwoComponent } from './components/task/task-created/step-two/step-two.component';
import { StepThreeComponent } from './components/task/task-created/step-three/step-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskGroupSubComponent } from './components/task/task-group-sub/task-group-sub.component';
import { ProgressCircleModule } from 'src/app/core/components/progress-circle/progress-circle.module';
import { ColorStatusPipe } from 'src/app/core/pipes/color-status.pipe';
import { MyJobComponent } from './my-job/my-job.component';
import { TaskItemComponent } from './components/task/task-item/task-item.component';
import { TaskGroupComponent } from './components/task/task-group/task-group.component';
import { ModalModule } from 'src/app/core/components/modal/modal.module';
import { PopupCreateTaskGroupComponent } from './components/task/task-detailt/popup-create-task-group/popup-create-task-group.component';
import { PopupCreateTaskGroupItemComponent } from './components/task/task-detailt/popup-create-task-group-item/popup-create-task-group-item.component';
import { RightSheetModule } from 'src/app/core/components/right-sheet/right-sheet.module';
import { MultipleSelectModule } from 'src/app/core/components/multiple-select/multiple-select.module';
import { PopupFileComponent } from './components/task/task-detailt/popup-create-task-group-item/popup-file/popup-file.component';

const MAT_MODULE = [
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    ProjectComponent, 
    NavigationComponent, 
    NavActionsComponent,
    NavProjectComponent,
    ChatDetailtComponent,
    TaskDetailtComponent, 
    TaskCreatedComponent, 
    TaskGroupSubComponent,
    HomeComponent,
    FileDropDirective,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    ColorStatusPipe,
    MyJobComponent,
    TaskItemComponent,
    TaskGroupComponent,
    PopupCreateTaskGroupComponent,
    PopupCreateTaskGroupItemComponent,
    PopupFileComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MAT_MODULE,
    TabModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressCircleModule,
    ModalModule,
    RightSheetModule,
    MultipleSelectModule
  ]
})
export class ProjectModule { }
