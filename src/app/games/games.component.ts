import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  //El decorador @Output() permite emitir eventos hacia el componente padre

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
    //El método fav() emite el evento addFavoriteEvent con el nombre del juego
  }
  games = [
    { 
      id: 1,
      name: 'Resident Evil 4', 
      genre: 'Survival Horror' 
    },
    { 
      id: 2,
      name: 'The Legend of Zelda Ocarina of Time', 
      genre: 'Action-Adventure' 
    },
    {
      id: 3,
      name: 'Persona 3',
      genre: 'RPG'
    }
  ]
}
