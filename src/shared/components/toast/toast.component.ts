import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [ngClass]="toast.type" (click)="toastService.remove(toast.id)">
          <div class="toast-content">
            @if (toast.type === 'success') { <i class="fas fa-check-circle"></i> }
            @if (toast.type === 'error') { <i class="fas fa-exclamation-circle"></i> }
            @if (toast.type === 'info') { <i class="fas fa-info-circle"></i> }
            <span>{{ toast.message }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none; /* Allow clicks to pass through container */
    }

    .toast {
      background: #333;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      backdrop-filter: blur(10px);
      min-width: 250px;
      max-width: 400px;
      animation: slideIn 0.3s ease-out forwards;
      pointer-events: auto; /* Re-enable clicks on toasts */
      cursor: pointer;
      border-left: 4px solid transparent;
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .toast-content i {
      font-size: 1.2em;
    }

    .toast.success {
      background: rgba(20, 20, 20, 0.9);
      border-left-color: #00e676;
    }
    .toast.success i { color: #00e676; }

    .toast.error {
      background: rgba(20, 20, 20, 0.9);
      border-left-color: #ff5252;
    }
    .toast.error i { color: #ff5252; }

    .toast.info {
      background: rgba(20, 20, 20, 0.9);
      border-left-color: #2979ff;
    }
    .toast.info i { color: #2979ff; }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
