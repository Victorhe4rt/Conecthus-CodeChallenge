import { Component,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider'; // Para a linha separadora
import { MatDialog } from '@angular/material/dialog';
import { ModalAddComponentComponent } from '../modal-add-component/modal-add-component.component';
import {UserServiceService} from '../services/user-service.service'
import { LastPassCard } from '../interface/LastPassCard';
import{ModalViewComponentComponent} from'../modal-view-component/modal-view-component.component';
import{ModalEditComponentComponent} from'../modal-edit-component/modal-edit-component.component';
import{ConfirmDeleteComponentComponent} from'../confirm-delete-component/confirm-delete-component.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../interface/User';
import {MatTableModule } from '@angular/material/table' ; 

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    
    
  ],
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  searchText: string = '';
  passwords: LastPassCard[] = [];

  users: User[] = []; 
  displayedColumns: string[] = ['nome', 'actions']; 


  constructor(public dialog: MatDialog, 
    private cdr: ChangeDetectorRef, 
    private userService :UserServiceService,
    private snackBar: MatSnackBar,
  ) {}


  ngOnInit(): void {
    this.loadUsers();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges(); 
  }

  addNewPassword() {
    const dialogRef = this.dialog.open(ModalAddComponentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.passwords.push(result);
        console.log('New password added:', result);
        this.loadUsers();
      }
    });
  }
  openViewDialog(item: any): void {
    const dialogRef = this.dialog.open(ModalViewComponentComponent, {
      width: '400px',
      data: item 
    });

    dialogRef.afterClosed().subscribe(result => {
 
    });
  }
  openEditDialog(item: any): void {
    const dialogRef = this.dialog.open(ModalEditComponentComponent, {
      width: '400px',
      data: { ...item } 
    });
  
    dialogRef.afterClosed().subscribe(updatedItem => {
      if (updatedItem) {
        this.loadUsers();
        const index = this.passwords.findIndex(c => c.id === updatedItem.id);
        if (index !== -1) {
          this.passwords[index] = updatedItem;
        }
      }
    });
  }
  
  
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
   
        console.log('Item deleted');
      
      } else {
        console.log('Deleção cancelada');
      }
    });
  }


  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.body || []; 
        console.log('Usuários carregados:', this.users);
      },
      error: (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    });
  }
  get filteredUsers() {
    return this.users.filter(
      user =>
        user.nome.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  deleteCard(item: any): void {
  
      this.userService.deleteUser(item.id).subscribe({
        next: () => {
          this.passwords = this.passwords.filter(card => card.id !== item.id);
          this.showSnackbar('Usuário Excluido com Sucesso', 'success-snackbar');
          this.loadUsers();
          console.log('Usuário Excluido com Sucesso');
        },
        error: (err) => {
          console.error('Erro ao excluir usuário:', err);
          this.showSnackbar('Erro ao excluir usuário', 'error-snackbar');

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
