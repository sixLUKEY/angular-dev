import { Component } from '@angular/core';
import { TicketBoxComponent } from '../ticket-box/ticket-box.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [TicketBoxComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
})
export class HomeViewComponent {}
