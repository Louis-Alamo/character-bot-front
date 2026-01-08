import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {

  @Input() label: string = 'Boton';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'cancel' | 'submit' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';


  @Output() onClickEvent = new EventEmitter<void>();


  onClick(){
    this.onClickEvent.emit();
  }

}
