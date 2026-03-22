import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorklogComponent } from './create-worklog/create-worklog.component';
import { ReadWorklogComponent } from './read-worklog/read-worklog.component';

const routes: Routes = [
  { path: 'create', component: CreateWorklogComponent },
  { path: 'read', component: ReadWorklogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
