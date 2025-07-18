  import { Component, Input, Output, EventEmitter } from '@angular/core';
  import { User } from './user.model';
  import { CardComponent } from "../shared/card/card.component";

  @Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent],
  })
  export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) isSelected!: boolean;

    @Output() select = new EventEmitter<string>(); // FIXED

    get imagePath() {
      return `assets/users/${this.user.avatar}`;
    }

    onSelectUser() {
      this.select.emit(this.user.id); // Emits user ID to parent
    }
  }
