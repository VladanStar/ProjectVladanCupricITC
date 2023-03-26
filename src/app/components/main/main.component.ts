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

    
sortIme(): void {
  this.tasks.sort((a: Task, b: Task): number => {
    if (a.naziv && b.naziv) {
      return a.naziv.localeCompare(b.naziv);
    } else {
      return 0;
    }
  });
}
// sortTim(): void {
//   this.players.sort((a: Player, b: Player): number => {
//     if (a.tim && b.tim) {
//       return a.tim.localeCompare(b.tim);
//     } else {
//       return 0;
//     }
//   });
// }
// sortPozicija(): void {
//   this.players.sort((a: Player, b: Player): number => {
//     if (a.pozicija && b.pozicija) {
//       return a.pozicija.localeCompare(b.pozicija);
//     } else {
//       return 0;
//     }
//   });
// }
// sortBroj() {
//   this.players.sort((a: Player, b: Player): number => {
//     if (a.broj_dresa && b.broj_dresa) {
//       return a.broj_dresa - b.broj_dresa;
//     } else {
//       return 0;
//     }
//   });
// }
}
