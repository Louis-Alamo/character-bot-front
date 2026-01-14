import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input';
import { TextareaComponent } from '../../../shared/components/textarea/textarea';
import { SliderComponent } from '../../../shared/components/slider/slider';
import { ImageUploadComponent } from '../../../shared/components/image-upload/image-upload';
import { ButtonComponent } from '../../../shared/components/button/button';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    TextareaComponent,
    SliderComponent,
    ImageUploadComponent,
    ButtonComponent,
    ToastComponent,
    ModalComponent
  ],
  templateUrl: './create-character.html',
  styleUrls: ['./create-character.css']
})
export class CreateCharacterComponent {
  name: string = '';
  description: string = '';
  avatarUrl: string = ''; // Placeholder for now
  systemPrompt: string = '';
  greetingMessage: string = '';
  temperature: number = 0.7;
  isModalOpen: boolean = false;

  constructor(
    private router: Router,
    private characterService: CharacterService,
    private toastService: ToastService
  ) {}

  onImageSelected(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onTemperatureChange(value: number) {
    this.temperature = value;
  }

  confirmCreation() {
    if (!this.name || !this.systemPrompt) {
      this.toastService.error('Debes completar los campos requeridos (Nombre y System Prompt)');
      return;
    }
    this.isModalOpen = true;
  }

  createCharacter() {
    this.isModalOpen = false;

    const characterData = {
      name: this.name,
      description: this.description,
      avatar_url: this.avatarUrl,
      system_prompt: this.systemPrompt,
      greeting_message: this.greetingMessage,
      temperature: this.temperature
    };

    console.log('Sending character data:', characterData);

    this.characterService.createCharacter(characterData).subscribe({
      next: (response) => {
        console.log('Character created successfully:', response);
        this.toastService.success('Personaje creado correctamente');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (error) => {
        console.error('Error creating character:', error);
        this.toastService.error('Error al crear el personaje');
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
