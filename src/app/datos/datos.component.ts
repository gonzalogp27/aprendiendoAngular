import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
  imports: [CommonModule]
})
export class DatosComponent {
  @Input() datos: { [key: string]: any } = {};
  @Input() username = '';
}
