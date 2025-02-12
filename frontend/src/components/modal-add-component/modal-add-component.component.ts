import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
import { UserServiceService } from '../services/user-service.service';


import { FormsModule } from '@angular/forms'
import { User } from '../interface/User';

@Component({
  selector: 'app-modal-add-component',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule, 
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './modal-add-component.component.html',
  styleUrl: './modal-add-component.component.css',
 
})
export class ModalAddComponentComponent {
  nome: string = '';
  email: string = '';
  matricula: string = '';
  senha: string = '';
  currentComponent = ''; 
 


  constructor(public dialogRef: MatDialogRef<ModalAddComponentComponent> ,
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  savePassword(): void {

    const newUser: User = {
      nome: this.nome,
      email: this.email,
      matricula: this.matricula,
      senha: this.senha,
    };
    
    this.userService.createUser(newUser).subscribe({
      next: (response) => {
        console.log('Usuário Salvo Com sucesso:', response);
        this.showSnackbar('Usuário Salvo com Sucesso', 'success-snackbar'); 
        this.dialogRef.close(newUser);
      },
      error: (err) => {
        console.error('Error ao salvar o Usuário:', err);
        this.showSnackbar('Error ao salvar o Usuário', 'error-snackbar'); 
      }
    });
  }
  

  private showSnackbar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass]
    });
  }



}
