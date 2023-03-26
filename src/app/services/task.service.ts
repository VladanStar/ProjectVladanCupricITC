import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFireDatabase) { }

  
  getAll(): Observable<Task[]> {
    return this.db
      .list<Task>('/taks')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as Task),
          }))
        )
      );
  }
  get(id: string): Observable<Task> {
    return this.db
      .object<Task>('/taks/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({
          id: x.payload?.key,
          ...(x.payload.val() as Task),
        }))
      );
  }
  update(taskId: string, Task: Task): void {
    this.db.object<Task>('/taks/' + taskId).update(Task);
  }
  add(Task: Task) {
    this.db.list('/taks').push(Task);
  }
  delete(taskId: any) {
    this.db.object<Task>('/taks/' + taskId).remove();
  }
}
