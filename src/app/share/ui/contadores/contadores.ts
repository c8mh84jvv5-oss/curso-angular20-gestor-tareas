import { Component,inject } from '@angular/core';
import { TaskStore } from '../../../features/tareas/task-store';


@Component({
  selector: 'app-contadores',
  imports: [],
  templateUrl: './contadores.html',
  styleUrl: './contadores.css',
})
export class Contadores {

  taskStore = inject(TaskStore);

}
