import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {UserComponentComponent} from "../user-component/user-component.component"
import { HomeComponentComponent } from "../home-component/home-component.component";

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [
    CommonModule, // Substitui o BrowserModule no componente standalone
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule,
    UserComponentComponent,
    HomeComponentComponent,
    

],
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent { 

  currentComponent = 'home'; 

  selectComponent(component: string) {
    if (this.currentComponent !== component) {
      this.currentComponent = component;
    }
  }

  resetComponent() {
    this.currentComponent = 'home'; 
  }
  
 
  
}
