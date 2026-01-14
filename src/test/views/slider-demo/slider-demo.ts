import { Component } from '@angular/core';
import { SliderComponent } from '../../../shared/components/slider/slider';

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './slider-demo.html',
  styleUrl: './slider-demo.css'
})
export class SliderDemoComponent {
  // Example values for two-way binding demo
  temperatura: number = 0.7;
  creatividad: number = 50;
  volumen: number = 75;
  brightness: number = 60;
  precision: number = 0.5;

  onTemperaturaChange(value: number) {
    this.temperatura = value;
    console.log('Temperatura changed:', value);
  }

  onCreatividadChange(value: number) {
    this.creatividad = value;
    console.log('Creatividad changed:', value);
  }

  onVolumenChange(value: number) {
    this.volumen = value;
    console.log('Volumen changed:', value);
  }

  onBrightnessChange(value: number) {
    this.brightness = value;
    console.log('Brightness changed:', value);
  }

  onPrecisionChange(value: number) {
    this.precision = value;
    console.log('Precision changed:', value);
  }
}
