import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  newTaskName: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTaskName.trim()) {
      this.taskService.addTask(this.newTaskName.trim());
      this.newTaskName = '';
    }
  }

  toggleTaskCompletion(task: Task): void {
    this.taskService.toggleTaskCompletion(task);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }
}


