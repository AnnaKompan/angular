import { Component, WritableSignal, effect, signal } from '@angular/core';
import { Test } from '../test/test';
import { CommonModule } from '@angular/common';
import { AsyncSubject, defer, ReplaySubject, tap, filter } from 'rxjs';
import { QUESTIONS } from '../../constants';
import { Observable, from, of, Subject, BehaviorSubject, delay, forkJoin, map } from 'rxjs';

// CommonModule для доступу до методів *ngFor @for
@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  // // creating subject
  // subjectFirst = new Subject<number>();

  // // Observable from subject (однонапралвений потік, не викликається метод next())
  // observable = this.subjectFirst.asObservable();

  // завжди є початкове значення, доступ до останнього
  behaviorSubject = new BehaviorSubject<number>(0);

  // створення декількох Observable які модулюють асинхронні запити (для forkJoin)
  observable1 = of('Запит 1').pipe(delay(1000)); // імітація запиту з затримкою 1 секунда
  observable2 = of('Запит 2').pipe(delay(500)); // імітація запиту з затримкою 0.5 секунди
  observable3 = of('Запит 3').pipe(delay(2000)); // імітація запиту з затримкою 2 секунди

  // forkJoin для комбінування результатів всіх трьох запитів (чекає поки всі observable будуть успішно виконані)
  combined = forkJoin([this.observable1, this.observable2, this.observable3]);

  // // створення replaySubject в якому передає аргументом к-ість збережених значень
  // replaySubject = new ReplaySubject<number>(2);

  // // Підписник отримує останнє значення після компліту
  // asyncSubject = new AsyncSubject<number>();

  // // creating observable
  // observableFirst = new Observable((subscriber) => {
  //   subscriber.next('Hi from RxJS');
  //   subscriber.complete();
  // });

  // // creating with "of" operator
  // observableSecond = of('First val', 'Second val', 'Third val');

  // // creating with "from" operator
  // observableThird = from(['First val', 'Second val', 'Third val']);

  // // creating with "from" operator from arr of numbers
  // observableForth = from([1, 2, 3]);

  // observableFifth = new Observable<string>((subscriber) => {
  //   subscriber.next('Stream start');
  //   subscriber.next('Data Processing');
  //   subscriber.error('Error');
  //   subscriber.next("This value won't be sent");
  //   subscriber.complete();
  // });

  // we need to subscribe to observable for it to produce values (ngOnInit lifecycle hook)
  ngOnInit(): void {
    // // всередині пайпу формуєм ланцюги з операторів (map,filter,tap)
    // this.behaviorSubject
    //   .pipe(
    //     // tap для ведення журналу значень (для дебагу чи відстеження) логування значеня
    //     tap((value) => console.log('Перед обробкою', value)),
    //     // фільтруємо, залишаємо значення більші за 0
    //     filter((value) => value > 0),
    //     // мапінг: множимо кожне значення на 10
    //     map((value) => value * 10),
    //   )
    //   .subscribe({
    //     next: (value) => console.log('Оброблене значення', value),
    //     complete: () => console.log('Завершено'),
    //   });
    // // ------------------- випуск значень для операторів в BehaviorSubject-------------------
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);
    // this.behaviorSubject.next(-3); // значення ігнорується фільтором
    // this.behaviorSubject.next(3);
    // this.behaviorSubject.complete();
    // ------------------- випуск forkJoin -------------------
    // this.combined.subscribe({
    //   next: ([response1, response2, response3]) => {
    //     console.log('Результат forkJoin: ', response1, response2, response3);
    //   },
    //   complete: () => console.log('всі запити завершено!'),
    // });
    // // producing first value through method next()
    // this.subjectFirst.next(1);
    // // значення продуовано і лише після підписався підписник, тому перший отримав 2!!!
    // // subscribing first user to Subject (один і той самий потік для всіх)
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підпискник 1: ', value),
    //   error: (err) => console.log('Підпискник 1 eror: ', err),
    //   complete: () => console.log('Підпискник 1 complete'),
    // });
    // // producing second value through method next()
    // this.subjectFirst.next(2);
    // // subscribing second user to Subject (один і той самий потік для всіх)
    // this.subjectFirst.subscribe({
    //   next: (value) => console.log('Підпискник 2: ', value),
    //   error: (err) => console.log('Підпискник 2 eror: ', err),
    //   complete: () => console.log('Підпискник 2 complete'),
    // });
    // // другий підписник отримав лише 3, бо підписавс після продукованого значення 2
    // // producing third value through method next()
    // this.subjectFirst.next(3);
    // // subject завершується
    // this.subjectFirst.complete();
    // // -------------------BehaviorSubject-------------------
    // this.behaviorSubject.subscribe((value) => console.log('Підписник 1: ', value));
    // // випуск 2 нових значень (перший підписник підписався і отримав разом з початковим значення)
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);
    // // другий підписник отримає значення 2 (останнє) одразу після підписки
    // this.behaviorSubject.subscribe((value) => console.log('Підписник 2: ', value));
    // // випуск кінцевого значення і всі два підписники його отримали
    // this.behaviorSubject.next(3);
    // // завершення BehaviorSubject
    // this.behaviorSubject.complete();
    // // -------------------ReplaySubject-------------------
    // this.replaySubject.next(1);
    // this.replaySubject.next(2);
    // this.replaySubject.next(3);
    // this.replaySubject.subscribe((value) => console.log('Перший підписник: ', value));
    // this.replaySubject.complete();
    // // -------------------AsyncSubject-------------------
    // this.asyncSubject.next(1);
    // this.asyncSubject.next(2);
    // this.asyncSubject.subscribe((value) => console.log('Підписник 1 AsyncSubject: ', value));
    // this.asyncSubject.next(3);
    // this.asyncSubject.next(4);
    // this.asyncSubject.complete();
    // subscribing to observableFirst with keyword(subscribe) with 3 handlers:next,error,complete
    // this.observableFirst.subscribe({
    //   next: (value) => console.log('Value of observable first: ', value),
    //   error: (error) => console.log('Error: ', error),
    //   complete: () => console.log('observableFirst complete!'),
    // });
    // this.observableSecond.subscribe({
    //   next: (value) => console.log('Value of observable second: ', value),
    //   complete: () => console.log('observableSecond complete!'),
    // });
    // this.observableThird.subscribe({
    //   next: (value) => console.log('Value of observableThird: ', value),
    //   complete: () => console.log('observableThird complete!'),
    // });
    // стрілкова функція без додаткових хендлерів
    // this.observableForth.subscribe((value) => console.log('Value of observableForth: ', value));
    // observable with error
    // this.observableFifth.subscribe({
    //   next: (value) => console.log('Value of observableFifth: ', value),
    //   error: (err) => console.log('Error of observableFifth: ', err),
    //   complete: () => console.log('Completed observableFifth'),
    // });
  }

  questions: WritableSignal<any[]> = signal(QUESTIONS);
  constructor() {
    effect(() => {
      // console.log(`Updated Questions: ${JSON.stringify(this.questions())}`);
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
