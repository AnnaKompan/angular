import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lightning } from '../../directives/lightning';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.html',
  // template: ` <div class="my-component">
  //   <p>Hello</p>
  // </div>`,
  styleUrl: './test.scss',
})
export class Test implements OnInit {
  newTask: string = '';
  tasks: string[] = [];

  // two options: constructor or inject()

  // constructor(private todoService: Todo) { }

  private todoService = inject(Todo);

  // initialize data
  ngOnInit() {
    // to initialize list of data using getTasks()
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = ''; // reset input field
      this.updateTasks();
    }
  }
  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.todoService.getTasks();
  }

  title: string = 'Its Interpolation';
  firstName: string = 'Anna';
  lastName: string = 'Smith';

  isEnabled: boolean = false;

  isActive: boolean = false;
  isDisabled: boolean = true;
  isClickedState: boolean = false;
  // notClickedState: boolean = true;
  appState = 'paused';

  inputText: string = '';

  users = ['Anna', 'Janet', 'James', 'David'];
  items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'grapes' },
    { id: 4, name: 'lemon' },
  ];

  today = new Date();
  longText = 'Very long text, that need to cut';

  //----------------------------------------------------------------------------
  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();
  //----------------------------------------------------------------------------

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    if (this.isClickedState) {
      this.isClickedState = false;
    } else {
      this.isClickedState = true;
    }
  }

  sendMessageToParent() {
    this.messageFromChild.emit('Im your child');
  }
}
