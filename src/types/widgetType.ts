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
};
