import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  userName:string;
  userPassword:string;
  notes:string[];
  sections:string[][];
  decks:string[];
  flashcards:string[][][];
  
  constructor() { }

}
