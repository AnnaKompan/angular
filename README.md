# AngularProject

Платформа для розробки веб засточунків написана на TypeScript

### 1. Angular CLI(command line interface bash)

інструмент для створення розробки і розгортанні додатків
`ng new ***`

### 2. RXJS

Бібіліотека що дозволяє управляти асинхронними даними

### 3. Angular Material

Набір компонентів інтерфейсу для створення консистентного UI (sliders, buttons)

### 4. NGRX

Бібліотека для управління станом на основі Redux патерну

### 5. TypeScript

додає типізацію до JS для надійності і читабельності коду

### 6. WebPack

модульний збирач, який оптимізує завантаження та управління ресурсами додатку

# Конфігураційні файли

### 1. angular.json

визначає опції збірки, розробки, тестування.

### 2. package.json

визначає залежності проєкту, скрипти та інші метадані для управління через npm

### 3. tsconfig.json

визначає опції компілятора та базовий набір файлів для проєкту. TypeScript компілюється JavaScript

### 4. .gitignore

файли для ігнорування.

# Файли Проєкту

### 1. src/

Основна діректорія з кодом застосунку

### 2. app/

Містить компоненти, модулі та сервіси додатку

### 3. assets/

Для статичних ресурсів (img, styles)

### 4. environments/

Для налаштування середовищ розробки

### 5. favicon.ico

Іконка сайту

### 6. index.html

Основна html page

### 7. main.ts

Вхідна точка апки

### 8. polyfills.ts

Файл для поліфілів, для пітримки старіших браузерів

### 9. styles.css

Глобальні стилі

# @Component - Клас з декоратором, основа в Angular

додає метадані для обробки шаблонів, стилів та логіки, може включати локальні стилі та логіку
`ng generate component <name>` - створити компонент
Властивості:

### 1. CSS селектор (styles/styleUrl)

визначає, як компонент використовується в HTML. Дозволяє інкапсулювати стилі для конкретного компонента

### 2. HTML-шаблон (template/templateUrl)

контролює, що рендериться в DOM.

### 3. changeDetection

вказує стратегію виявлення змін. наприклад ChangeDetectionStrategy.OnPush

### 4. encapsulation

- ViewEncapsulation.**Emulated** default (свої стилі не впливають глобально, а глобальні впливають)
- ViewEncapsulation.**None** (стилі компонента стають глобальними)
- ViewEncapsulation.**ShadowDom** (стилі не впливають глобально, глобальні не впливають теж).

# Дата-біндінг в шаблонах

дозволяє створювати двосторонню комунікацію між шаблоном і класом компонента.
Види прив’язок:

1. **Interpolation** `({{ value }})` — для вставки значень з компонента в HTML.

2. **Property binding** `([property]="value")` — для прив’язки властивостей елементів DOM до значень компонента.

3. **Event binding** `((event)="handler()")` — для прив’язки обробників подій компонента до подій елементів DOM.

4. **Two-way binding** `([(ngModel)]="property")` — для синхронізації значення форми з властивістю компонента.

# Клас компонента в Angular

це центральна частина компонентної архітектури, яка використовується для визначення логіки та даних компонента.

```
export class Test {
   title: string = 'Hi Angular';

   changeTitle(newTitle: string):void{
       this.title = newTtle;
   }
}
```

# Робота з даними в компонентах

Життєвий цикл компонента в Angular - послідовність етапів від **ініціалізації** до **знищення компонента**.

## Lifecycle Hooks

1. **ngOnChanges()** — викликається, коли Angular встановлює або змінює зв'язані дані властивості вхідних даних.
2. **ngOnInit()** — виконується один раз після першого виклику ngOnChanges, використовується для ініціалізації компонента.
3. **ngDoCheck()** — викликається після ngOnInit та щоразу, коли Angular виконує перевірку змін.
4. **ngAfterContentInit()** — викликається один раз після вставки вмісту в представлення компонента (<ng-content>).
5. **ngAfterContentChecked()** — викликається після кожної перевірки вмісту, вставленого через <ng-content>.
6. **ngAfterViewInit()** — викликається один раз після ініціалізації представлення компонента та дочірніх компонентів.
7. **ngAfterViewChecked()** — викликається після кожної перевірки представлення компонента та дочірніх компонентів.
8. **ngOnDestroy()** — виконується перед тим, як Angular знищить компонент. Використовується для очищення ресурсів, таких як відписка від спостерігачів (observables) та звільнення ресурсів, щоб запобігти витоку пам'яті.

**Interpolation** => `<p>{{}}</p>`

**ngStyle і ngClass** — директиви, які дозволяють динамічно змінювати стилі та класи HTML-елементів у шаблоні компонента.

`<p [ngStyle]="{color: 'red'}">ngStyle used</p>`

`<p [ngClass]="{'active': isActive, 'disabled': isDisabled}"> ngClass used</p>`

## Event binding

дозволяє реагувати на різноманітні події, що відбуваються в DOM

----> кліки миші, наведення миші, натискання клавіш тощо

!**синтаксис круглих дужок!**
`<button (click)='onClick()'> Click </button>` (in class add click(){alert()})

## Two-Way Data Binding

концепція, яка дозволяє автоматично синхронізувати дані між моделлю компонента та його представленням (шаблоном).

**Parent <-----------> Child**

!!! використовується директива **[(ngModel)]** import FormsModule from forms для зв'язування даних з шаблоном компонента

```
<input type="text" [(ngModel)]="inputText" /> <!-- Two-way binding -->
<p>{{inputText}}</p> <!-- Виведення значень за допомогою інтерполяції -->

<!-- inside class -->
  inputText: string = '';
```

### Комунікація між компонентами

реалізована за допомогою декораторів **@Input** та **@Output**

```
<!-- ts file of component -->
    @Input() childMessage: string = '';
    @Output() messageFromChild = new EventEmitter<string>();

    sendMessageToParent() {
    this.messageFromChild.emit('Im your child');
}

<!-- component.html -->
    <p>{{childMessage}}</p>
    <button (click)="sendMessageToParent()">Send message to Parent!</button>

<!-- app.ts -->

  messageFromParent = 'Im yo father';
  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }

<!-- app.html -->
<p>{{messageFromChild}}</p>
<app-test [childMessage]="messageFromParent" (messageFromChild)="getMessageFromChild($event)"></app-test>
```

# Директива @Directive

— дає можливість маніпулювати елементами DOM (структурою документа) або поведінкою елементів на сторінці.

### Типи директив:

**структурні** та **атрибутивні**

1. **структурні** змінюють DOM

   `*ngIf, *ngFor, *ngSwitch` now `@if @for @switch`

2. **атрибутивні** додають або змінюють поведінку або вигляд HTML-елементів - **NgStyle** та **NgClass**

   `<p [ngStyle]="{color: 'red'}">ngStyle used</p>`

   `<p [ngClass]="{'active': isActive, 'disabled': isDisabled}"> ngClass used</p>`

### @for

```
    <!-- OLD FOR -->
<ul>
    <li *ngFor="let user of users; index as i">{{i+1}}: {{user}}</li>
</ul>
```

```
    <!-- NEW FOR -->
<ul>
    @for (user of users; track user; let idx = $index, e=$even, total=$count){
    <li>User: #{{idx+1}}:{{user}}</li>
    <p>Total Users: {{total}}</p>
    }@empty{
    <li>There are no users!</li>
    }
</ul>
```

**контекстні змінні**:

1. **$count** — вказує загальну кількість елементів у колекції;
2. **$index** — індекс поточного елемента в циклі;
3. **$first** — логічна змінна, що вказує, чи є поточний елемент першим у циклі;
4. **$last** — логічна змінна, що вказує, чи є поточний елемент останнім у циклі;
5. **$even** — істина, коли індекс поточного елемента парний;
6. **$odd** — істина, коли індекс поточного елемента непарний.

### @switch

```
<!-- OLD SWITCH -->
<div [ngSwitch]="appState">
    <p *ngSwitchCase="'active'"> APP is active</p>
    <p *ngSwitchCase="'paused'"> APP is paused</p>
    <p *ngSwitchCase="'stopped'"> APP is stopped</p>
    <p *ngSwitchDefault="">APP State is unknown</p>
</div>
```

```
<!-- NEW SWITCH -->
@switch(appState){
@case('active'){
<p>APP is active</p>
}
@case('paused'){
<p>APP is paused</p>
}
@case('stopped'){
<p>APP is stopped</p>
}
@default{
<p>APP State is unknown</p>
}
}
```

### @if

```
<!-- OLD IF-->
<p *ngIf="isClickedState ; else notClickedState"> Button was clicked! </p>
<ng-template #notClickedState>
    <p>Buton wasn't clicked!</p>
</ng-template>
<button (click)="toggleState()"> Toggle State </button>
```

```
<!-- NEW IF -->
@if (isClickedState){
<p>Button was clicked!</p>
}@else {
<p>Buton wasn't clicked!</p>
}
<button (click)="toggleState()">Toggle State</button>
```

# Пайпи

це спеціальні класи, які використовуються для трансформації, форматування даних у шаблонах.

### Вбудовані пайпи:

1. **DatePipe** — використовується для форматування дати та часу (shortDate, longDate, fullTime..)

`    <p>{{today | date: 'shortDate' }}</p>`

2. **UpperCasePipe** та **LowerCasePipe**

`    <p>{{"HELLO WORLD" | lowercase}}</p>`

3. **CurrencyPipe** — перетворення числа у формат валюти.

`    <p>{{1500.5 | currency}}</p>`

4. **DecimalPipe** — для форматування чисел, кількість цифр до та після коми.

`    <p>{{1.23455322 | number}}</p>`

5. **PercentPipe** — перетворює число у відсоткове значення + %.

`   <p>{{0.5| percent}}</p>`

6. **JsonPipe** — виводить об'єкт у форматі JSON. Корисний для дебагінгу.

`    <p>{{ { name: 'John', age: 23} | json }}</p>`

7. **AsyncPipe** — автоматично підписується на Observable або Promise та повертає останнє значення, яке воно видало.

**_date і currency, можуть використовуватись для локалізації застосунків_**

### Типи пайпів

чисті (**pure**) -тоді, коли Angular виявляє зміну, якщо без змін то юзаєм кеш

нечисті (**impure**) -при кожній зміні вхідних даних або при кожному циклі перевірки змін

### Кастомні пайпи

`ng g p blabla`

```
<!-- truncate-pipe.ts -->
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
```

<!-- test.html -->

`<p>{{longText | truncate: 18}}</p>`

# Services

це фрагменти коду багаторазового використання.

### Основні компоненти сервісу:

- **TypeScript-декоратор (@Injectable)** — вказує на те, що клас є сервісом Angular. Властивість providedIn, зазвичай 'root' -> доступ до сервісу в усьому застосунку.

- **TypeScript-клас** — визначає код/методи, який буде доступний, коли сервіс буде впроваджено.

### Створення сервісу:

1. ng g s blabla
2. Реєстрація сервісу. Модульний підхід:

- cервіси надаються у межах **NgModules**. Сервіси можуть бути зареєстровані у **providers** відповідних модулів, а потім можуть бути впроваджені у компоненти всередині того ж модуля.

2. Реєстрація сервісу. Standalone-підхід:

- шляхом передачі провайдерів до функції **bootstrapApplication**.

**_метод впровадження залежностей, що використовує `ApplicationConfig`_**

```
<!-- Це дозволяє використовувати CalculatorService у будь-якому місці без імпортів в кожен компонент
-->
bootstrapApplication(AppComponent, {
  providers: [
    SomeService,
    ...
  ]
})
```

3. Import в компоненті де будем юзати:

   `import { Todo } from '../../services/todo';`

4. Оголошення поля класу, в яке буде впроваджуватись сервіс
   ```
   export class Test implements OnInit {
   newTask: string = '';
   tasks: string[] = [];....
   }
   ```
5. Функція \***\*inject\*\***, яка створює сервіс:

   `private todoService = inject(Todo);`

   OR

   `constructor(private todoService: Todo) { використанн сервісу в конструкторі }`

## Depency Injection (DI)

дозволяє класам з Angular-декораторами, такими як **Component, Directive, Pipe та Injectable** налаштовувати потрібні їм залежності

**РОЛІ DI:**

- споживач залежностей
- провайдер залежностей.

\***\*Depency Injection - ключовий механізм для зменшення залежностей та зв'язку між різними частинами застосунку, що полегшує його тестування та підтримку (DI компоненти та сервіси замість того, щоб створювати залежності самостійно, отримують їх від Angular)\*\***

# Форми

основний інструмент для збору даних від користувачів

### 1. шаблонні (template-driven)

- прості у використанні та ідеально підходять для простих та помірно складних форм
- Центральним елементом є директива ngModel, яка дозволяє реалізувати двостороннє зв'язування між елементами форми в HTML і моделями даних у компонентах TypeScript
- Валідація у шаблонних формах також визначається на рівні шаблону, без додавання в TS

### 2. реактивні (reactive)

- надають більш гнучкі та масштабовані можливості, для складних сценаріїв з високим рівнем кастомізації
- використання класів FormGroup і FormControl, що дає повний контроль над поведінкою форми
- забезпечують динамічніше управління станом форми, включно з асинхронною валідацією

## Використання реактивних форм

1. Імпорт **ReactiveFormsModule** з пакета @angular/forms
   ```
   import {
   AbstractControl,
   FormsModule,
   ReactiveFormsModule,
   Validators,
   ValidationErrors,
   FormGroup,
   FormControl,
   } from '@angular/forms';
   ```
2. вказати **ReactiveFormsModule** у полі **imports** вашого компонента. Це дозволить використовувати реактивні форми у компоненті.

```
@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  ...
})
```

3. Для роботи з реактивною формою Створіть екземпляр **FormControl** із початковим значенням (щоб керувати станом введення форми, слухати зміни та валідувати дані.)

```
export class Test{
  name = new FormControl('');
  <!-- OR formGroup(fixed size) OR formArray(dynamic size)-->
  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    ...
  })
}
```

4. Після створення контролу в класі компонента, асоціюйте його з елементом форми у шаблоні

```
  <label for="name">Name</label>
  <input id="name" type="test" [formControl]="name">
<!-- OR FOR formGroup -->
  <label for="email">Email: </label>
  <input type="email" formControlName="email" />
  <div *ngIf="email?.invalid && email?.touched" class="error">This value is invalid</div>
```

\***\*Метод setValue() використовується для оновлення значення поля форми, patchValue() — оновлює лише ті властивості, які визначені в об'єкті та змінилися в моделі форм\*\***

```
<!-- ts file in class method -->
updateName(){
  this.name.setValue('Nancy')
}
<!-- html file -->
<button type="button" (click)="updateName()">Update Name</button>
```

5. Щоб обробити дані форми, додайте до форми подію **ngSubmit**, яка буде активована при її відправленні

```
<form [formGroup]="complexForm" (ngSubmit)="onSubmit()">
        <label for="name">Name: </label>

    <!-- і в консолі відображаєм (функція в екземплярі класу в методах в ts директиві)-->

onSubmit() {
  console.log('Form value: ', this.complexForm.value);
  console.log('Form status - is valid: ', this.complexForm.valid);
  console.log('Form controls: ', this.complexForm.controls);
}
```

6. Валідація форм. Створення власних валідаторів

- import {Validators} from ...forms
- додати Validators.required як другий параметр до масиву при створенні елемента управління

```
complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ...
})
```

Два типи:

- **Синхронні**(негайно повертають набір помилок валідації або **null**, коли додали другим аргументом при створенні контроль форми)
- **Асинхронні** (приймають екземпляр контролу і повертають Promise або Observable, коли додали третім аргументом при створенні контроль форми) \***\*Angular запускає асинхронні валідатори лише після успішного завершення всіх синхронних валідаторів\*\***

**Кастомний Валідатор**

```
export class Test {
// кастомний валідатор віку
    ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
    }
<!-- і додам в контроль групу як this.blalba -->
    age: new FormControl('', [Validators.required, this.ageValidator]),
```

## Використання template-driven форм

1. Імпортувати **FormsModule** до компонента при standalone-підході.

```
export class UserRegist {
   user = {
   name: '',
   email: ''
   };

   onSubmit(){
   console.log(this.user)
   }
   }
```

2. Використати директиву **NgModel**, щоб прив'язати поля форми до моделі. (Додайте **[(ngModel)]** до кожного поля введення у формі, щоб двосторонньо прив'язати)

```
<form #userForm="ngForm" (ngSubmit)="onSubmit()">
  <div>
      <label for="name">Name: </label>
      <input type="text" id='name' [(ngModel)='user.name' name='name' required] />
      <!-- touched when input empty and user didn't enter anyt' -->
      <div *ngIf="name?.invalid && name?.touched" class="error">This value is invalid</div>
  </div>
```

# Роутинг

механізм, який керує навігацією від однієї сторінки до іншої без перезавантаження браузера.

**_В контексті односторінкових застосунків (SPA), ми керуємо відображенням вмісту на сторінці, показуючи або приховуючи компоненти без повного перезавантаження сторінки з сервера, router інтерпретує URL-адресу в адресному рядку браузера як команду для зміни активного компонента_**

## Налаштування роутингу. Модульний підхід

1. файл з назвою **app-routing.module.ts** у кореневій директорії вашого проєкту.
2. Імпортуйте **RouterModule** і **Routes** з @angular/router.
3. Оголосіть масив роутів, де кожен елемент масиву описує шлях і компонент, який буде відображатися.

   **_path(URL-шлях) and component (який буде відображатися)_**

   \*\* `'**'`====> шлях дозволяє вказати компонент, який відображатиметься при неправильному URL\*\*

```
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'angular', component: Angular },
  { path: 'typescript', component: Typescript },
  { path: 'javascript', component: Javascript },
  { path: 'rxjs', component: Rxjs },
  { path: '**', component: PageNotFound },
];
```

4. Налаштуйте **RouterModule**. **RouterModule.forRoot(routes)** forRoot(), реєструє ці маршрути на кореневому рівні.
5. Експортуйте налаштований **RouterModule**. Це дозволить вам використовувати роутинг в інших частинах вашого Angular-застосунку.

```
@ngModule({
  imports: [RouterModule.forRoot(routes)],
  exports: RouterModule
})
```

**RouterModule** - відповідає за реєстрацію та керування роутами, надає директиви: **routerLink** для створення посилань у шаблонах і **router-outlet** для місця вставки відповідного компонента

**Routes** - масив, в якому кожен елемент визначає відношення між шляхом в URL і компонентом

## Налаштування роутингу. Standalone-підхід

не потрібно створювати або використовувати NgModule!!!

1. зберігати роутингові конфігурації в окремих файлах і імпортувати їх у разі потреби.

---

потрібно внести зміни до файлу **main.ts** : функцію bootstrapApplication для запуску застосунку, додавши конфігурацію роутів як другий аргумент.

## Додавання маршрутів до застосунку. Керування маршрутами

`<router-outlet>` — це директива Angular, яка використовується в HTML-шаблоні, щоб вказати, де будуть відображатися компоненти, вибрані на основі роутингу. (Angular знищує попередні компоненти та створює нові в місці розташування <router-outlet>)

`<a routerLink="/">` повідомляє Angular, куди перейти, коли користувач натискає на посилання

**Програмна навігація** — це процес управління маршрутами програмно, без навігаційних посилань у HTML, за допомогою вбудованого сервісу **Router**.

```
export class Component{

<!-- реалізація Router у компоненті за допомогою конструктора -->
  constructor(private router: Router){}
  goToAbout(){
    this.router.navigate(['/about'])
  }
}
```

**routerLinkActive** дозволяє автоматично додавати класи до елементів навігації (таких як посилання), коли їхній маршрут збігається з поточним маршрутом

`<a routerLinkActive='active>`

Універсальний маршрут (**wildcard route**) дозволяє обробляти ситуації, коли користувач намагається перейти до неіснуючої сторінки.

` { path: '\*\*', component: PageNotFound }

Для налаштування **перенаправлення** необхідно визначити маршрут для перенаправлення.

Конфігурація маршруту включає **шлях (path: '')**, з якого ви хочете перенаправити, **компонент**, на який ви хочете перенаправити **(redirectTo: '/home')**, та значення **pathMatch:'full'**, яке вказує маршрутизатору, як зіставляти URL-адресу.

## Ліниве Завантаження (Lazy Loading)

дозволяє зменшити початковий час завантаження застосунку шляхом поділу коду на кілька частин (бандлів), які завантажуються лише за потреби.

**loadChildren** - щоб вказати, який модуль слід завантажувати ліниво.

1. Ліниве завантаження групи компонентів

```
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
]
```

## Ліниве завантаження для standalone-компонентів та групи компонентів (NgModule)

2. Ліниве завантаження одного компонента (завантажиться лише тоді коли юзер перейде до компонента)

```
const routes: Routes = [
  {
    path: 'feature',
    loadComponent: () => import('./feature/feature.component').then(c => c.FeatureComponent)
  }
]
```

## Захист маршрутів з допомогою Guards

## механізм керування доступом до маршрутів, дозволяє **виконати перевірку** умов перед активацією маршруту, щоб переконатися, що користувач має **права доступу**

Типи Guards

1. **CanActivate** — визначає, чи може користувач активувати маршрут.

2. **CanLoad** — перевіряє, чи може користувач ліниво завантажити модуль.

3. **CanActivateChild** — визначає, чи може користувач активувати дочірні маршрути маршруту.

## Standalone routes + Lazy Loading

1. Оголосіть масив роутів, де кожен елемент масиву описує шлях і компонент в **app.routes.ts** in root dir.

Routes

```
export const routes: Routes = [
  { path: 'angular', component: Angular },
];
```

Routes with Lazy Loading

```
export const routes: Routes = [
  {
    path: 'angular',
    loadComponent: () =>
      import('./angular/angular.component')
        .then(m => m.Angular)
  },
];
```

2. router setup в **app.config.ts** має бути, щоб підключити router в standalone:

```
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
```

3. Add to **app.ts** imports of **RouterOutlet**(навігація) and **RouterLink**(місце де рендериться сторінка=>router-outlet)

```
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    // RouterLinkActive,
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
```

4. В app.html додати `<router-outlet></router-outlet>` де рендериться сторінка

---

**component = одразу грузиться**

**loadComponent = lazy loading**

# Change Detection - цикл виявлення змін （Zone.js）

механізм для виявлення змін у даних компонентів

- кліки миші
- введення тексту у форми
- перемикання вкладок
- завершення асинхронних HTTP-запитів

Коли подія виявлена, Angular використовує цю інформацію для ініціації **перевірки змін** （алгоритм **«dirty checking»** - порівнює поточні значення даних з попередніми）

Angular використовує бібліотеку Zone.js для визначення початку та завершення асинхронних операцій.

## Zone.js

бібліотека для JavaScript, яка дозволяє перехоплювати асинхронні операції та керувати ними.

- відстежує початок і кінець асинхронних операцій
- може перехоплювати різні асинхронні події, включаючи кліки мишею, таймери, проміси, асинхронні запити
- Коли асинхронна подія завершується, Zone.js повідомляє Angular, що потрібно **перевірити наявність змін** та **оновити інтерфейс**.

## Change Detection стратегії

підходи до управління тим, як і коли фреймворк ідентифікує та обробляє зміни у даних і станах компонентів

- Default `ChangeDetectionStrategy.Default` (при створенні компоненту, Angular автоматично застосовує Default, що відстежує будь-які можливі зміни в компонентах і повторно рендерить усі компоненти, навіть якщо зміни відбулись тільки в одному маленькому елементі застосунку)
- OnPush `ChangeDetectionStrategy.OnPush` (вказати в метаданих компонента щоб юзати!!! ) активізується тоді, коли змінюються вхідні дані компонента (шляхом зміни зв’язаних даних властивостей **@Input**) або коли перевірка змін викликається вручну (`detectChanges` або `markForCheck` у сервісі `ChangeDetectorRef`).

-> _markForCheck():_ не ініціює виявлення змін негайно, але гарантує, що компонент буде перевірено під час наступного запуску циклу виявлення змін.

```
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-component,
  template: `
    <p>Data Status: {{ dataStatus }}</p>
  `,
})
export class DataDisplayComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // позначаєм компонент для перевірки
    updateState(private cdr: ChangeDetectorRef){}
    updateState(){
      this.crd.markForCheck();
    }
  }
}
```

-> _detectChanges():_ негайно запускає виявлення змін для компонента і всіх його піделементів незалежно від того, чи використовується стратегія _OnPush_, чи ні.

```
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-component,
  template: `
    <p>Data Status: {{ dataStatus }}</p>
  `,
})
export class DataDisplayComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // позначаєм компонент для перевірки
    updateState(private cdr: ChangeDetectorRef){}
    updateState(){
      this.crd.detectChanges();
    }
  }
}
```

## NgZone

керує механізмом виявлення змін в Angular при кожній події користувача(синхронизація змін)
Часті події, такі як **mouseUp()** або **mouseDown()** можуть ініціювати занадто багато циклів виявлення змін, що може знизити продуктивність, тому поза NgZone зменшує кількість непотрібних перевірок (**runOutsideAngular**), для повернення до NgZone **ngZone.run()**.

```
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-my-component,
  template: `
    <p>Data Status: {{ dataStatus }}</p>
  `,
})
export class DataDisplayComponent {
  constructor(private ngZone: NgZone) {}

  ngOnInit() {

      this.ngZone.runOutsideAngular(()=>{
        // код що буде раниться поза зоною
  })
}
}
```

# Ліниве завантаження шаблонів @defer

ліниве завантаження (lazy loading) вмісту на основі конкретних умов або подій

- Підтримка тригерів для активації завантаження;
- Передзавантаження (prefetching);
- Управління станами завантаження, помилок і плейсхолдерів через підблоки;
- Створення власних умов за допомогою **when**/ **on** та **prefetch when**.
  - **on idle** — коли браузер переходить в неактивний стан.
  - **on viewport** — коли вказаний контент потрапляє у видиму область.
  - **on interaction** — коли користувач взаємодіє з елементом через події **click** або **keydown**.
  - **on hover** — коли миша наведена на елемент.
  - **on immediate** — одразу після завершення рендерингу клієнтом.
  - **on timer** — після вказаного інтервалу часу.
- **prefetch when** та **prefetch on** - попереднє завантаження ресурсів до того, як користувач побачить або почне взаємодіяти з блоком defer

```
@defer(on hover(hoverArea)){
<app-test></app-test>
}@placeholder{
<div>Loading component...</div>
}@loading{
<div>Loading...</div>
}@error {
<p>Failed to load!</p>
}
```

**_Router lazy loading працює на рівні руту (loadChildren, loadComponent) а @defer — це lazy loading ВСЕРЕДИНІ компонента_**

## Angular Signals

обгортка навколо значення, Angular сам відслідковує, коли воно змінюється
і оновлює UI автоматично, дуже точно оновлюває DOM, лише змінені елементи.

- Змінювані сигнали (WritableSignal) через .set() або update()
- Для читання

1. signal() - зберігає стан
2. computed() - обчислює
3. effect() - реагує на зміну сигналу

```
count = signal(2);

double = computed(() => count() * 2);

effect(() => {
  console.log(double());
});
```

**_EFFECT для поширення змін стану може призвести до помилок ExpressionChangedAfterItHasBeenChecked_**

# Реактивне програмування

парадигма програмування, зосереджена на асинхронних потоках даних, обробляючи події в реальному часі.

- **Streams** - Серія асинхронних подій, що можуть бути будь-чим — від кліків користувачів до вхідних даних із сервера.
  **обробляти події без зупинки головного потоку**

- **RxJS** - бібліотека для реактивного програмування, що використовує JavaScript, дає інструменти для створення та керування асинхронними даними та подіями через концепцію **Observable** (основний абстрактний тип в RXJS, що представляє колекцію майбутніх значень або подій + оператори що обробляють фільтрують підписки через: **map, filter, merge та switchMap**)

## Створення Observables

- для ручного визначення потоку даних та надсилання значень за допомогою методу `next()`

```
  observableFirst = new Observable((subscriber) => {
    subscriber.next('Hi from RxJS');
    subscriber.complete();
  });

    observableFifth = new Observable<string>((subscriber) => {
    subscriber.next('Stream start');
    subscriber.next('Data Processing');
    subscriber.error('Error');
    subscriber.next("This value won't be sent");
    subscriber.complete();
  });
```

- Використання операторів RxJS `of` `from` для утворення з статичних даних

```
  observableSecond = of('First val', 'Second val', 'Third val');

  observableThird = from(['First val', 'Second val', 'Third val']);

  observableForth = from([1, 2, 3]);
```

- Використання оператора `fromEvent()` для створення Observable із події DOM

--------Example: Створюємо Observable, який імітує асинхронні запити-----

```
  observable1 = of('Запит 1').pipe(delay(1000)); // імітація запиту з затримкою 1 секунда
  observable2 = of('Запит 2').pipe(delay(500)); // імітація запиту з затримкою 0.5 секунди
  observable3 = of('Запит 3').pipe(delay(2000)); // імітація запиту з затримкою 2 секунди
```

## Subject у RxJS

особливий тип Observable, який дозволяє не тільки спостерігати за даними, а й активно відправляти (емітувати) нові дані всім своїм підписникам

**Observable** передає дані тільки після підписки, а **Subject** може передавати дані в будь-який час.

- приймати дані від споживачів через `next()`, `complete()` і `error()`
- передавати їх іншим підписникам
  - **BehaviorSubject('початкове значення')** - дає останнє значення
  - **ReplaySubject(розмір буферу 2)** - запам'ятовує кілька останніх значень і відправляє їх новим
  - **AsyncSubject** -відправляє лише останнє значення і тільки тоді, коли викликається метод `complete()`

## Оператори RxJs

1. **map**: Трансформує кожен елемент потоку за допомогою функції мапування.
2. **filter**: Відфільтровує елементи потоку на основі певної умови.
3. **tap**: Дозволяє виконати певну дію для кожного елемента потоку без зміни його значення
4. **switchMap**: дозволяє перемикатися між різними потоками даних, створюючи новий потік для кожного значення, що надходить. Він корисний в ситуаціях, коли джерело даних змінюється і нам необхідно скасувати попередні операції та перейти до нових.

```
    this.behaviorSubject
      .pipe(
        // tap для ведення журналу значень (для дебагу чи відстеження) логування значеня
        tap((value) => console.log('Перед обробкою', value)),

        // фільтруємо, залишаємо значення більші за 0
        filter((value) => value > 0),

        // мапінг: множимо кожне значення на 10
        map((value) => value * 10),
      )
      .subscribe({
        next: (value) => console.log('Оброблене значення', value),
        complete: () => console.log('Завершено'),
      });
```

5. **forkJoin**: дозволяє дочекатися завершення обробки всіх надісланих observable та виводить їхні останні значення у вигляді масиву

```
  // створення декількох Observable які модулюють асинхронні запити (для forkJoin)
  observable1 = of('Запит 1').pipe(delay(1000)); // імітація запиту з затримкою 1 секунда
  observable2 = of('Запит 2').pipe(delay(500)); // імітація запиту з затримкою 0.5 секунди
  observable3 = of('Запит 3').pipe(delay(2000)); // імітація запиту з затримкою 2 секунди

  // forkJoin для комбінування результатів всіх трьох запитів (чекає поки всі observable будуть успішно виконані)
  combined = forkJoin([this.observable1, this.observable2, this.observable3]);

  // in ngOnInit
      this.combined.subscribe({
      next: ([response1, response2, response3]) => {
        console.log('Результат forkJoin: ', response1, response2, response3);
      },
      complete: () => console.log('всі запити завершено!'),
    });
```
