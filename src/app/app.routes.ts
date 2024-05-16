import { Routes } from '@angular/router';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'ordenes',component: OrdenesComponent},
    {path: 'usuarios',component: UsuariosComponent},
    {path: 'login', component: LoginComponent},
];
