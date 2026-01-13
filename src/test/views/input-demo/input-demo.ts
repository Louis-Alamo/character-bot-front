import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input-demo.html',
  styleUrl: './input-demo.css'
})
export class InputDemoComponent {
  // Example values for two-way binding demo
  textValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';
}
