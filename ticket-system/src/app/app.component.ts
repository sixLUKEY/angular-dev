import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketBoxComponent } from './ticket-box/ticket-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ticket-system';
}
