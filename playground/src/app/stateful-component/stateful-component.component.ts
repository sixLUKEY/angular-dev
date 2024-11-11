import { Component } from '@angular/core';
import { dummyUsers } from './data';

const randomIndex = Math.floor(Math.random() * dummyUsers.length);

@Component({
  selector: 'app-stateful-component',
  standalone: true,
  imports: [],
  templateUrl: './stateful-component.component.html',
  styleUrl: './stateful-component.component.css',
})
export class StatefulComponentComponent {
  selectedUser = dummyUsers[randomIndex];

  get userInfo() {
    return `${this.selectedUser.name} from ${this.selectedUser.location}`;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * dummyUsers.length);
    this.selectedUser = dummyUsers[randomIndex];
  }
}
