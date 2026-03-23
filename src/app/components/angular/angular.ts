import { Component, WritableSignal, effect, signal } from '@angular/core';
import { Test } from '../test/test';
import { CommonModule } from '@angular/common';
import { defer } from 'rxjs';
import { QUESTIONS } from '../../constants';

// CommonModule для доступу до методів *ngFor @for
@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [Test, CommonModule],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  questions: WritableSignal<any[]> = signal(QUESTIONS);
  constructor() {
    effect(() => {
      console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
    });

    // call addQuestionOnce method after delay 5000 milliseconds
    setTimeout(() => this.addQuestionOnce(), 5000);
  }

  addQuestionOnce() {
    const newQuestion = {
      number: this.questions().length + 1,
      question: `New question ${this.questions().length + 1}`,
      difficulty: 'Easy',
    };
    // append new questions to the list
    this.questions.set([...this.questions(), newQuestion]);
  }
}
