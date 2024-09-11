export interface ToastProps {
    id?: number;
    title: string;
    visible?: boolean;
    description?: string;
    onClose?: () => void;
    autoHide?: boolean; 
    duration?: number;
    position: 'top' | 'bottom';
    type: 'error' | 'success' | 'warning' | 'info' | 'primary';
  }