import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent, DatosComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'gonzalo';
  logged = false; //Funciona como un estado
  datos = {
    edad: 19,
    nacionalidad: "Española",
    localidad: "Olivares",
    sexo: "Hombre"
  };  
  favGame = '';

  getFavourite(gameName: string){
    this.favGame = gameName;
    //Este método se ejecuta cuando se emite el evento addFavoriteEvent
  }

  greet(){
    alert('gonzaloooooooooo'); 
    //Este método debe ser definido aquí para poderse usar en el HTML
  }
}