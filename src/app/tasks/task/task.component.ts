import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter<string>();  // Emit taskId to parent

  onComplete() {
    this.complete.emit(this.task.id);  // Trigger event with task ID
  }
}
