import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test/button-demo',
    loadComponent: () => import('../test/views/button-demo/button-demo').then(m => m.ButtonDemoComponent)
  },
  {
    path: 'test/input-demo',
    loadComponent: () => import('../test/views/input-demo/input-demo').then(m => m.InputDemoComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
