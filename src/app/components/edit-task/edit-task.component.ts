import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    private taskServis: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: any;
  task: Task = {
    naziv: '',
    hitan: '',
    uradjen: '',
    datum: new Date(),
    category: '',
  };
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.taskServis.get(this.id).subscribe((p) => {
        this.task = p;
        console.log(this.task);
      });
    }
  }
  updateTask(f: NgForm) {
    // console.log(f.value)
    let id = this.id as string;
    this.taskServis.update(id, f.value);
    window.alert('Task je editovan');
    this.router.navigate(['main']);
    // f.reset();
  }
}
