import { Component, signal } from '@angular/core';
import { Test } from './components/test/test';

@Component({
  selector: 'app-root',
  imports: [Test],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-project');

  messageFromParent = 'Im yo father';
  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
