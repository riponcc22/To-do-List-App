import { Injectable } from '@angular/core';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter: number = 0;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string): void {
    const newTask = new Task(this.idCounter++, name);
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

