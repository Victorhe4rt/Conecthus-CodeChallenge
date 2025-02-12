import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../interface/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-modal-edit-component',
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
  templateUrl: './modal-edit-component.component.html',
  styleUrls: ['./modal-edit-component.component.css']
})
export class ModalEditComponentComponent {

  isPasswordVisible: boolean = false;
  id: number =0;
  nome: string = '';
  email: string = '';
  matricula: string = '';
  senha: string = '';

  currentComponent = '';

  constructor(
    public dialogRef: MatDialogRef<ModalEditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  )
  
  
  {
    this.id = data.id;
    this.nome = data.nome;
    this.senha = data.senha;
    this.matricula = data.matricula;
    this.email = data.email;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  private showSnackbar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }

  editUser(): void {
    if (!this.id) {
      this.showSnackbar('Invalid item!', 'error');
      return;
    }

    const updatedUser: Omit<User, 'id'> = {
      nome: this.nome,
      email: this.email,
      matricula: this.matricula,
      senha: this.senha,
 
    };

    this.userService.updateUser(this.id, updatedUser).subscribe({
      next: () => {
        this.showSnackbar('Dados de Usuário atualizado com sucesso!', 'success');
        this.dialogRef.close(updatedUser); 
      },
      error: (err) => {
        console.error('Error ao atualizar o usuário:', err);
        this.showSnackbar('Error ao atualizar o usuário', 'error');
      }
    });

  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
