// FILE: src/app/tasks/tasks.component.ts

import { Component, Input } from '@angular/core';
import { Task } from './task/task.model';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent, CommonModule],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks: Task[] = [
    {
      id: 't1',
      title: 'Learn TypeScript',
      summary: 'Understand types, interfaces, and advanced TypeScript features.',
      dueDate: '2025, 10, 30',
      userId: 'u2',
    },
    {
      id: 't2',
      title: 'Learn RxJS',
      summary: 'Learn observables, operators, and reactive programming in Angular.',
      dueDate: '2025, 11, 05',
      userId: 'u2',
    },
    {
      id: 't3',
      title: 'Practice Angular Signals',
      summary: 'Get hands-on experience with signal-based reactivity.',
      dueDate: '2025, 11, 10',
      userId: 'u3',
    }
  ];

  get selectedUserTasks(): Task[] {
    console.log('[getTasksForUser] Recalculating tasks for:', this.userId);
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onTaskComplete(taskId: string) {
    console.log('[TasksComponent] Removing task with ID:', taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  trackById(index: number, task: Task): string {
  return task.id;
}
}
