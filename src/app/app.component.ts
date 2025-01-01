import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgCustomInputComponent } from './ng-custom-input/ng-custom-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgCustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-input';
  username = signal('');
  password = signal('');
  pin = signal('');
}
