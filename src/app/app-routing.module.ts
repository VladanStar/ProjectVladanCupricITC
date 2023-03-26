import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  { path: 'verify-email', component: VerifyEmailComponent },
  {path:"main",component:MainComponent},
  { path: 'task/add', component: AddTaskComponent },
  {path:"main/task/:id",component:TaskDetailComponent},
  { path:'task/edit/:id', component: EditTaskComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
