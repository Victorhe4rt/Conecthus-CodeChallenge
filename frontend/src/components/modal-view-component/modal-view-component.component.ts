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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-view-component',
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
  templateUrl: './modal-view-component.component.html',
  styleUrls: ['./modal-view-component.component.css']
})
export class ModalViewComponentComponent {
  nome: string = '';
  email: string = '';
  matricula: string = '';
  senha: string = '';
  isPasswordVisible: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalViewComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nome = data.nome;
    this.senha = data.senha;
    this.matricula = data.matricula;
    this.email = data.email;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
