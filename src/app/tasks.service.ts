import { Injectable } from "@angular/core";
import { NewTaskData, Task } from "./tasks/task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
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

  // ✅ Get tasks for a specific user
  getTasksForUser(userId: string): Task[] {
    console.log('[TasksService] Fetching tasks for user:', userId);
    return this.tasks.filter(task => task.userId === userId);
  }

  // ✅ Add a new task (correctly typed)
  addTask(taskData: NewTaskData, userId: string): void {
    const newTask: Task = {
      id: new Date().toISOString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    };

    this.tasks.unshift(newTask);
  }

  // ✅ Remove a task
  removeTask(taskId: string): void {
    console.log('[TasksService] Removing task with ID:', taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
