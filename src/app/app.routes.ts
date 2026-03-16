import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Angular } from './components/angular/angular';
import { Typescript } from './components/typescript/typescript';
import { Javascript } from './components/javascript/javascript';
import { Rxjs } from './components/rxjs/rxjs';
import { PageNotFound } from './components/page-not-found/page-not-found';

// масив маршрутів(path:'', component: ...) для ініціалізації роутингу на кореневому рівні
// якщо юзер переходить по певному шляху, ми підвантажуємо компонент
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'angular', component: Angular },
  { path: 'typescript', component: Typescript },
  { path: 'javascript', component: Javascript },
  { path: 'rxjs', component: Rxjs },
  { path: '**', component: PageNotFound },
];
