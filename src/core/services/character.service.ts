import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

export interface BackendCharacter {
  id: number;
  name: string;
  description: string;
  avatar_url: string;
  system_prompt: string;
  greeting_message: string;
  temperature: number;
  created_at: string;
}

export interface CreateCharacterDTO extends Omit<BackendCharacter, 'id' | 'created_at'> {}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiResponse<BackendCharacter[]>> {
    return this.http.get<ApiResponse<BackendCharacter[]>>(this.apiUrl);
  }

  createCharacter(character: CreateCharacterDTO): Observable<ApiResponse<BackendCharacter>> {
    return this.http.post<ApiResponse<BackendCharacter>>(this.apiUrl, character);
  }
}
