import { Component } from '@angular/core';
import { TextareaComponent } from '../../../shared/components/textarea/textarea';

@Component({
  selector: 'app-textarea-demo',
  standalone: true,
  imports: [TextareaComponent],
  templateUrl: './textarea-demo.html',
  styleUrl: './textarea-demo.css'
})
export class TextareaDemoComponent {
  // Example values for two-way binding demo
  welcomeMessage: string = '';
  descriptionValue: string = '';
  notesValue: string = '';
}
