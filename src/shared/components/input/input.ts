import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, AfterContentInit } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent implements AfterContentInit {

  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() icon: string = '';
  @Input() iconPosition: 'start' | 'end' = 'start';

  @Output() valueChange = new EventEmitter<string>();

  showPassword: boolean = false;

  @ContentChild('[slot="start"]', { read: ElementRef }) startContent?: ElementRef;
  @ContentChild('[slot="end"]', { read: ElementRef }) endContent?: ElementRef;
  hasStart: boolean = false;
  hasEnd: boolean = false;

  ngAfterContentInit() {
    this.hasStart = !!this.startContent;
    this.hasEnd = !!this.endContent;
  }

  get showPasswordToggle(): boolean {
    return this.type === 'password';
  }

  onChangeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  hasStartContent(): boolean {
    return this.hasStart || !!this.icon;
  }

  hasEndContent(): boolean {
    return this.hasEnd || !!this.icon;
  }
}
