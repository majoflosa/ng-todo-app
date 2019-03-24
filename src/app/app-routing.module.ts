import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'details/:id', component: TaskDetailsComponent },
  // { path: 'done', component: }
  { path: '', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
