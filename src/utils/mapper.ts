import { ReactNode } from 'react';
import { Toast, ToastItem, ToastItemStatus } from '../types/toast.types';

export function toToastItem(toast: Toast, status: ToastItemStatus): ToastItem {
  return {
    content: toast.content as ReactNode,
    containerId: toast.props.containerId,
    id: toast.props.toastId,
    theme: toast.props.theme,
    type: toast.props.type,
    data: toast.props.data || {},
    isLoading: toast.props.isLoading,
    icon: toast.props.icon as ReactNode,
    status,
  };
}
