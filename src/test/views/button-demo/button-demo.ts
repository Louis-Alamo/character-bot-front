import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-demo.html',
  styleUrl: './button-demo.css'
})
export class ButtonDemoComponent {
}
