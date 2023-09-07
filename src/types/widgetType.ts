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
  onLongPress?: () => void;
};

export type WidgetsType = 'Mail' | 'Trombino' | 'Weather' | 'Calendar';

export type CustomWidgetProps = {
  id: number;
  widget: WidgetsType;
  size: WidgetSize;
};
