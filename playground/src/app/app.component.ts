import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatefulComponentComponent } from './stateful-component/stateful-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatefulComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playground';
}
