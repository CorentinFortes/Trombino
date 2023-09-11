import React from 'react';

export enum WidgetSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  HEADER = 'HEADER',
}

export type WidgetType = {
  size: 'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  id?: number;
  onLongPress?: () => void;
  onPress?: () => void;
  deleteFunction?: (id: number) => void;
  setCurrentSize?: (size: WidgetSize) => void;
  setOpenSizeModal?: (open: boolean) => void;
  openSizeModal?: boolean;
};

export type WidgetsType =
  | 'Mail'
  | 'Trombino'
  | 'Weather'
  | 'Calendar'
  | 'Cloud'
  | 'Todo';

export type CustomWidgetProps = {
  id: number;
  widget: WidgetsType;
  size: WidgetSize;
};
