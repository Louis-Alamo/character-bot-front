import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-upload.html',
  styleUrl: './image-upload.css'
})
export class ImageUploadComponent {
  @Input() maxSize: number = 5 * 1024 * 1024; // 5MB default
  @Output() imageSelected = new EventEmitter<File>();
  @Output() error = new EventEmitter<string>();

  previewUrl: string | null = null;
  selectedFile: File | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Validate type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Solo se permiten imágenes en formato JPG o PNG.');
        this.error.emit('INVALID_TYPE');
        return;
      }

      // Validate size
      if (file.size > this.maxSize) {
        alert('La imagen es demasiado grande. Por favor recórtala o elige una más pequeña.');
        this.error.emit('INVALID_SIZE');
        return;
      }

      this.selectedFile = file;
      this.imageSelected.emit(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result as string;
        this.cdr.detectChanges(); // Force change detection
      };
      reader.readAsDataURL(file);
    }
  }
}
