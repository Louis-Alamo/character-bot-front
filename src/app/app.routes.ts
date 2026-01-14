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
    path: 'test/textarea-demo',
    loadComponent: () => import('../test/views/textarea-demo/textarea-demo').then(m => m.TextareaDemoComponent)
  },
  {
    path: 'test/slider-demo',
    loadComponent: () => import('../test/views/slider-demo/slider-demo').then(m => m.SliderDemoComponent)
  },
  {
    path: 'test/image-upload-demo',
    loadComponent: () => import('../test/views/image-upload-demo/image-upload-demo').then(m => m.ImageUploadDemoComponent)
  },
  {
    path: 'characters/create',
    loadComponent: () => import('../features/characters/create/create-character').then(m => m.CreateCharacterComponent)
  },
  {
    path: '',
    loadComponent: () => import('../features/lobby/lobby').then(m => m.LobbyComponent)
    // redirectTo: '',
    // pathMatch: 'full'
  }
];
