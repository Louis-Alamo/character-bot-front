import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgClass } from "@angular/common";


@Component ({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})


export class SliderComponent {

  @Input() label: string = '';
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() textInit: string = '';
  @Input() textEnd: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() leyend: string = '';
  @Input() icon: string = '';
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  onChangeSlider(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = parseFloat(target.value);
    this.valueChange.emit(this.value);
  }

  isSvgIcon(): boolean {
    return this.icon.endsWith('.svg') ||
           this.icon.endsWith('.png') ||
           this.icon.endsWith('.jpg') ||
           this.icon.endsWith('.jpeg') ||
           this.icon.endsWith('.webp') ||
           this.icon.startsWith('data:image');
  }
}
