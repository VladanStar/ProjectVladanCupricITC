import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private auth: AuthService, private taskService:TaskService) {
    this.auth.updateLoginStatus(false);
  }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(p=> this.tasks =p);
    }
}
