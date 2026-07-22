import { Component, computed, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './features/tareas/task';
import { TaskStore } from './features/tareas/task-store';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Gestor de tareas';
taskStore = inject(TaskStore);
  
}
