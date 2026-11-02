import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'biblioteca', component: BibliotecaComponent}
];
