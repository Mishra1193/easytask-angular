// FILE: src/app/tasks/task/task.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model'; // Adjust the import path as necessary

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter<string>();  // Emit taskId to parent

  onComplete() {
    this.complete.emit(this.task.id);  // Trigger event with task ID
  }
}
