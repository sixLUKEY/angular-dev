import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ticket-system';
}
