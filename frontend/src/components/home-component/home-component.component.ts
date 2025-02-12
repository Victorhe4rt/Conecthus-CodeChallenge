import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-component',
  standalone: true, // Garante que o componente pode ser usado isoladamente
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'] // Correção aqui
})
export class HomeComponentComponent {
  currentDate: Date = new Date();
  userName: any;
}
