import { Component,output,input } from '@angular/core';


@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  agregar = output<string>();

  agregarTarea(input: HTMLInputElement): void {
    const tarea = input.value;
      if (!tarea) {
      return;
      }
    this.agregar.emit(input.value);
    input.value = '';
  }

}
