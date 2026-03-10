import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.html',
  // template: ` <div class="my-component">
  //   <p>Hello</p>
  // </div>`,
  styleUrl: './test.scss',
})
export class Test {
  title: string = 'Its Interpolation';
  firstName: string = 'Anna';
  lastName: string = 'Smith';

  isEnabled: boolean = false;

  isActive: boolean = false;
  isDisabled: boolean = true;
  isClickedState: boolean = true;

  inputText: string = '';

  //----------------------------------------------------------------------------
  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();
  //----------------------------------------------------------------------------

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('Im your child');
  }
}
