import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  constructor() {}
  private todo: string[] = [];

  // add new task
  addTask(task: string) {
    this.todo.push(task);
  }

  // get list of all tasks
  getTasks(): string[] {
    return this.todo;
  }

  // rm task from list
  removeTask(index: number) {
    this.todo.splice(index, 1);
  }

  // clear list of tasks
  clearTasks() {
    this.todo = [];
  }
}
