import { Component, computed, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './features/tareas/task';
import { TaskStore } from './features/tareas/task-store';
import { TaskItem } from './share/ui/task-item/task-item';
import { TaskForm } from './share/ui/task-form/task-form';
import { Contadores } from './share/ui/contadores/contadores';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskItem, TaskForm,Contadores],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Gestor de tareas';
taskStore = inject(TaskStore);
  
}
