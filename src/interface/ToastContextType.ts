import { ToastProps } from "./ToastProps";

export interface ToastContextType {
    addToast: (toast: ToastProps) => void;
  }