import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// запуск застосунку - ініціалізація застосунку
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
