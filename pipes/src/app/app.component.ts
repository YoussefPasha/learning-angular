import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  paymentDate: string = '';
  paymentAmount: number = 0.0;

  onNameChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      this.name = value;
    }
  }
  onDateChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      this.paymentDate = value.toString();
    }
  }

  onAmountChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      this.paymentAmount = parseFloat(value);
    }
  }
}
