import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  private users = [
    { name: 'Admin', email: 'admin@example.com', password: 'admin123', age: 30 }
  ];
  private loggedInUser: any = null;

  register(user: any) {
    this.users.push(user);
  }

  login(email: string, password: string): boolean {
    // const user = this.users.find(u => u.email === email && u.password === password);
    const user: any = {
      email: email,
      password: password
    };
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
  }
}
