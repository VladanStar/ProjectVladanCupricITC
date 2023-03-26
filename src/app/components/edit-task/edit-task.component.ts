import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  projectForm!: FormGroup;
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
    this.projectForm = new FormGroup({
      'projectName':new FormControl(null, [Validators.required]),
      'project': new FormControl(null, [Validators.required]),
      'project1': new FormControl(null, [Validators.required]),
      'project2': new FormControl(null, [Validators.required]),
      'project3':new FormControl('drustvo')
      });
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
