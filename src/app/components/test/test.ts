import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Lightning } from '../../directives/lightning';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test.html',
  // template: ` <div class="my-component">
  //   <p>Hello</p>
  // </div>`,
  styleUrl: './test.scss',
})
export class Test {
  // кастомний валідатор віку
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
  }
  // publick property, where create object{}
  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, this.ageValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit() {
    console.log('Form value: ', this.complexForm.value);
    console.log('Form status - is valid: ', this.complexForm.valid);
    console.log('Form controls: ', this.complexForm.controls);
  }

  get name() {
    return this.complexForm.get('name');
  }

  get email() {
    return this.complexForm.get('email');
  }

  get age() {
    return this.complexForm.get('age');
  }

  get password() {
    return this.complexForm.get('password');
  }

  get consent() {
    return this.complexForm.get('consent');
  }

  // newTask: string = '';
  // tasks: string[] = [];
  // two options: constructor or inject()
  // constructor(private todoService: Todo) { }
  // private todoService = inject(Todo);
  // initialize data
  // ngOnInit() {
  //   // to initialize list of data using getTasks()
  //   this.tasks = this.todoService.getTasks();
  // }
  // addTask() {
  //   if (this.newTask.trim() !== '') {
  //     this.todoService.addTask(this.newTask.trim());
  //     this.newTask = ''; // reset input field
  //     this.updateTasks();
  //   }
  // }
  // removeTask(index: number) {
  //   this.todoService.removeTask(index);
  //   this.updateTasks();
  // }
  // private updateTasks() {
  //   this.tasks = this.todoService.getTasks();
  // }
  // title: string = 'Its Interpolation';
  // firstName: string = 'Anna';
  // lastName: string = 'Smith';
  // isEnabled: boolean = false;
  // isActive: boolean = false;
  // isDisabled: boolean = true;
  // isClickedState: boolean = false;
  // // notClickedState: boolean = true;
  // appState = 'paused';
  // inputText: string = '';
  // users = ['Anna', 'Janet', 'James', 'David'];
  // items = [
  //   { id: 1, name: 'apple' },
  //   { id: 2, name: 'orange' },
  //   { id: 3, name: 'grapes' },
  //   { id: 4, name: 'lemon' },
  // ];
  // today = new Date();
  // longText = 'Very long text, that need to cut';
  //----------------------------------------------------------------------------
  // @Input() childMessage: string = '';
  // @Output() messageFromChild = new EventEmitter<string>();
  //----------------------------------------------------------------------------
  // getFullName() {
  //   return `My name is ${this.firstName} ${this.lastName}`;
  // }
  // toggleState() {
  //   if (this.isClickedState) {
  //     this.isClickedState = false;
  //   } else {
  //     this.isClickedState = true;
  //   }
  // }
  // sendMessageToParent() {
  //   this.messageFromChild.emit('Im your child');
  // }
}
