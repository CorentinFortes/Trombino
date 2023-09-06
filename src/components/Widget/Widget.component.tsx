import React from 'react';
import { WidgetType } from '../../types/widgetType';
import { WidgetContainer } from './Widget.style';

const WidgetComponent: React.FC<WidgetType> = ({
  size,
  icon,
  title,
  children,
  onLongPress,
  ...props
}) => {
  return (
    <>
      <WidgetContainer size={size} onLongPress={onLongPress} {...props}>
        {children}
      </WidgetContainer>
    </>
  );
};

export const Widget = React.memo(WidgetComponent);
