import React from 'react';
import { WidgetType } from '../../types/widgetType';
import { WidgetContainer } from './Widget.style';

const WidgetComponent: React.FC<WidgetType> = ({
  size,
  icon,
  title,
  children,
  ...props
}) => {
  return (
    <WidgetContainer size={size} {...props}>
      {children}
    </WidgetContainer>
  );
};

export const Widget = React.memo(WidgetComponent);
