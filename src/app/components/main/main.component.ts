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
  totalLength: any;
  page: number = 1;
  p: any;
  searchText:any;
  tasks: Task[] = [];
  constructor(private auth: AuthService, private taskService: TaskService) {
    this.auth.updateLoginStatus(false);
  }

  ngOnInit(): void {
    this.taskService.getAll().subscribe((p) => (this.tasks = p));
  }

  sortIme(): void {
    this.tasks.sort((a: Task, b: Task): number => {
      if (a.naziv && b.naziv) {
        return a.naziv.localeCompare(b.naziv);
      } else {
        return 0;
      }
    });
  }
  sortHitnost(): void {
    this.tasks.sort((a: Task, b: Task): number => {
      if (a.hitan && b.hitan) {
        return a.hitan.localeCompare(b.hitan);
      } else {
        return 0;
      }
    });
  }
  sortPozicija(): void {
    this.tasks.sort((a: Task, b: Task): number => {
      if (a.id && b.id) {
        return a.id.localeCompare(b.id);
      } else {
        return 0;
      }
    });
  }
  sortDatum(){
    
  }
}
