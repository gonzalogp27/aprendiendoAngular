import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DocumetosComponent } from './documetos/documetos.component'; 
import { EnlacesELKComponent } from './enlaces-elk/enlaces-elk.component';

//Componente principal de la aplicación - decorador
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EnlacesELKComponent],
  //templateUrl: './app.component.html', //Para ver como se ren
  template: `
    <h1>Hola desde {{city}}</h1>
      <!--Llamamos al componente User (el cual hay que especificar en los imports)-->
    <!--<app-user></app-user>
    <app-documetos></app-documetos>-->
    <app-enlaces-elk></app-enlaces-elk>
  `,
  styleUrl: './app.component.css'
})

//Clase principal de la aplicación
  //Atributos
export class AppComponent {
  //title = 'proyectoEjemplo'; - Este title no lo estamos usando
  city = 'Valencina de la Concepción';
}

//Como crear un componente en Angular
  // ng g component nombreComponente