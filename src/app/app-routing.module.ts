import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from './core/guards/home.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
    canLoad: [HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
