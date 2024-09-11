import React, { createContext, FC, ReactNode, useState } from "react";
import { ToastContextType } from "../interface/ToastContextType";
import { ToastProps } from "../interface/ToastProps";
import Toast from "../components/Toast";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Array<ToastProps>>([]);

  const addToast = (toast: ToastProps) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, ...toast }]);

    if (toast.autoHide !== false) {
      setTimeout(
        () => {
          setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
        },
        toast.duration ? toast.duration * 1000 : 10000
      ); // Auto-hide after 10 seconds
    }
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast: any) => (
        <Toast
          key={toast.id}
          visible={true}
          type={toast.type}
          title={toast.title}
          description={toast.description || ""}
          position={toast.position}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
};
