import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from '../../../shared/components/image-upload/image-upload';

@Component({
  selector: 'app-image-upload-demo',
  standalone: true,
  imports: [CommonModule, ImageUploadComponent],
  templateUrl: './image-upload-demo.html',
  styleUrl: './image-upload-demo.css'
})
export class ImageUploadDemoComponent {
  lastSelectedFile: File | null = null;

  onImageSelected(file: File) {
    console.log('File selected:', file);
    this.lastSelectedFile = file;
  }
}
