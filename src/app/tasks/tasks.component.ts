import { Component, Input } from '@angular/core';
import { Task } from './task/task.model';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent, CommonModule, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddTaskClicked = false; // Form is hidden by default

  constructor(private taskService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.taskService.getTasksForUser(this.userId);
  }

  onAddTaskClick() {
    this.isAddTaskClicked = true; // Show form
  }

  onCloseAddTask() {
    this.isAddTaskClicked = false; // Hide form
  }

  onTaskComplete(taskId: string) {
    this.taskService.removeTask(taskId); // ✅ Remove task by ID
  }

  trackById(index: number, task: Task): string {
    return task.id;
  }
}
