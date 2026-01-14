import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  role?: string;
  model: string;
  status?: 'online' | 'offline';
}

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() cardClick = new EventEmitter<Character>();

  onCardClick() {
    this.cardClick.emit(this.character);
  }

  handleImageError(event: any) {
    event.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=' + this.character.name;
  }
}
