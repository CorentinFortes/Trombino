import React, { useState } from 'react';
import { TodoType } from '../../types/todo';
import { WidgetType } from '../../types/widgetType';
import { Widget } from './TodoWidget.style';

type TodoWidgetProps = {
  todos: TodoType[];
} & WidgetType;

export const TodoWidget: React.FC<TodoWidgetProps> = ({
  todos,
  size,
  onPress,
}) => {
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  return (
    <Widget size={currentSize} onPress={onPress}>
      <>
        {currentSize === 'LARGE' && <></>}
        {currentSize === 'HEADER' && <></>}
        {currentSize === 'SMALL' && <></>}
        {currentSize === 'MEDIUM' && <></>}
      </>
    </Widget>
  );
};
