import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users = ['Anna', 'John', 'Kate'];

  getUsers() {
    return this.users;
  }
}
