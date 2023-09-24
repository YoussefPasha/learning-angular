import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

const { lorem } = faker;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(e: Event) {
    if (e?.target instanceof HTMLInputElement) {
      const { value } = e.target;
      this.enteredText = value;
    }
  }

  onMatch = (): boolean => {
    if (this.randomText === this.enteredText) {
      return true;
    }
    return false;
  };

  compare(randomLetter: string, enteredLetter: String) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
