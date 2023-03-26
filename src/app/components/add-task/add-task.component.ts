import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  implements OnInit{
  constructor(private taskService: TaskService, private router: Router){}
  ngOnInit(): void {
    
  }
  
addTask(f: NgForm) {
  // console.log(f.value)

  this.taskService.add(f.value);

  window.alert('Task je dodat');
  this.router.navigate(['main']);
}

}
