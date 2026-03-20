import { Component, signal } from '@angular/core';
// import { Test } from './components/test/test';
import {
  RouterLinkActive,
  RouterOutlet,
  RouterLink,
  NavigationStart,
  NavigationEnd,
  Router,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

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
export class App {
  loading: boolean = false;
  // protected readonly title = signal('angular-project');

  // messageFromParent = 'Im yo father';
  // messageFromChild = '';

  // getMessageFromChild(message: string) {
  //   this.messageFromChild = message;
  // }

  // loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }
}
