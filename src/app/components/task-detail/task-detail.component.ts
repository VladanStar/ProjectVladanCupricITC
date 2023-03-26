import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  id:any;
task:Task={}
  constructor(private taskServis:TaskService, private route:ActivatedRoute,
    private router:Router){}
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){


    this.taskServis.get(this.id).subscribe(p => {
     this.task = p;
     console.log(this.task);
   });
 }
  }

  deleteTask(){

  }
}
