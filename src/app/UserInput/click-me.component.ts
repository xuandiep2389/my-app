import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
        <button (click)="onclickme()">Click me</button>
        {{this.message}}
  `
})
export class ClickMeComponent {
  message: string;

  onclickme() {
    this.message = "Hello i love you"
  }
}
