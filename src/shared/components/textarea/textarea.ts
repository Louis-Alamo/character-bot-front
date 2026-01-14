import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgClass } from "@angular/common";

@Component ({
  selector: 'app-textarea',
  standalone: true,
  imports: [NgClass],
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.css']
})

export class TextareaComponent {

  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() leyend: string = '';
  @Input() rows: number = 4;

  @Output() valueChange = new EventEmitter<string>();

  onChangeTextarea(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.valueChange.emit(target.value);
  }

}
