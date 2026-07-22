import { Component, computed, effect,signal,Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task';

const STORAGE_KEY = 'tareas';

@Injectable({
    providedIn: 'root'
})
export class TaskStore {
    tareas = signal<Task[]>(this.cargar());

constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tareas()));
    });
  }

    pendientes = computed(() => this.tareas().filter((t) => !t.completada).length);
    totalTareas = computed(() => this.tareas().length);
    completatas = computed(() => this.tareas().filter((t) => t.completada).length);

    agregar(titulo: string): void {
        const limpio = titulo.trim();
        if (!limpio) {
            return;
        }
        this.tareas.update((lista) => [
        ...lista,
        { id: Date.now(), titulo: limpio, completada: false },
        ]);
    } 

    eliminar(id: number): void {
        this.tareas.update((lista) => lista.filter((t) => t.id !== id));
    }

    toggle(id: number): void {
        this.tareas.update((lista) =>
        lista.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)),
        );
    }

    limpiarCompletadas(): void {
        this.tareas.update(
            (lista) => lista.filter((t) => t.completada === false)
        );
    }

    private cargar(): Task[] {
        const guardadas = localStorage.getItem(STORAGE_KEY);
        if (guardadas) {
            const tareas = JSON.parse(guardadas) as Task[];
            if (tareas.length > 0) {
            return tareas;
            }
        }
        return [
            { id:  Date.now(), titulo: 'Aprender angular', completada: false },
            { id:  Date.now(), titulo: 'Construir un proyecto nuevo', completada: false },
            { id:  Date.now(), titulo: 'Dominar signals', completada: true },
        ];
    }
}
