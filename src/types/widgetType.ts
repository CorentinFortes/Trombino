import React from 'react';

export enum WidgetSize {
  BIG = 'BIG',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  HEADER = 'HEADER',
}

export type WidgetType = {
  size: 'BIG' | 'MEDIUM' | 'SMALL' | 'HEADER';
  icon?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
};
