import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Character, CharacterCardComponent } from '../../shared/components/character-card/character-card';
import { CharacterService, BackendCharacter } from '../../core/services/character.service';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, RouterLink],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css'
})
export class LobbyComponent implements OnInit {
  characters: Character[] = [];
  allCharacters: Character[] = []; // Store the full list

  constructor(
    private router: Router,
    private characterService: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('LobbyComponent initialized');
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        if (response.success && response.data) {
          const mappedCharacters = response.data.map((char: BackendCharacter) => ({
            id: String(char.id),
            name: char.name,
            role: 'Asistente',
            description: char.description,
            imageUrl: char.avatar_url,
            model: '7B Model',
            status: 'online' as const
          }));
          this.allCharacters = mappedCharacters;
          this.characters = mappedCharacters;
          console.log('Mapped characters:', this.characters);
          this.cdr.detectChanges();
        } else {
          console.error('Invalid response format:', response);
        }
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
      }
    });
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();

    if (!query) {
      this.characters = [...this.allCharacters];
    } else {
      this.characters = this.allCharacters.filter(char =>
        char.name.toLowerCase().includes(query) ||
        char.description.toLowerCase().includes(query)
      );
    }
  }

  onCardClick(character: Character) {
    console.log('Character clicked:', character);
  }
}
