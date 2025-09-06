import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.page').then( m => m.SobrePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'invalido',
    loadComponent: () => import('./pages/invalido/invalido.page').then( m => m.InvalidoPage)
  },
  {
    path: 'sobretwo',
    loadComponent: () => import('./pages/sobretwo/sobretwo.page').then( m => m.SobretwoPage)
  },
];
