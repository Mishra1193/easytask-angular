import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common'; // required for ngIf/ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  // Find the selected user object based on selectedUserId
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  // Receive selected user ID from child (UserComponent)
  onSelectUserParent(id: string) {
    this.selectedUserId = id;
  }

  // TrackBy for ngFor optimization
  trackByUserId(index: number, user: { id: string }) {
    return user.id;
  }
}
