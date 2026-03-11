import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lightning } from '../../directives/lightning';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, Lightning, TruncatePipe],
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
