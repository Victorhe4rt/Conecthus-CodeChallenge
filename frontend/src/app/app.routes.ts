import { Routes } from '@angular/router';
import {SidebarComponentComponent} from '../components/sidebar-component/sidebar-component.component'
import {UserComponentComponent} from '../components/user-component/user-component.component'
import { HomeComponentComponent } from '../components/home-component/home-component.component';

export const routes: Routes = [

    { path: '', component: SidebarComponentComponent },
    { path: 'user', component: UserComponentComponent },
    { path: 'home', component: HomeComponentComponent },
];
