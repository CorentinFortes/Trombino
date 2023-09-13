import React, { useState } from 'react';
import { TodoType } from '../../types/todo';
import { WidgetType } from '../../types/widgetType';
import {
  HeaderContent,
  HeaderLeftWrapper,
  HeaderText,
  LargeContent,
  MediumContent,
  SmallContent,
  TaskCard,
  TaskContent,
  TaskToDoCount,
  TaskToDoCountBig,
  TextMedium,
  TopContent,
  Widget,
} from './TodoWidget.style';
import { Octicons } from '@expo/vector-icons';

type TodoWidgetProps = {
  todos: TodoType[];
} & WidgetType;

export const TodoWidget: React.FC<TodoWidgetProps> = ({
  todos,
  size,
  onPress,
  deleteFunction,
}) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  return (
    <Widget
      size={currentSize}
      onPress={onPress}
      onLongPress={() => setOpenSizeModal(true)}
      setCurrentSize={setCurrentSize}
      setOpenSizeModal={setOpenSizeModal}
      openSizeModal={openSizeModal}
      deleteFunction={deleteFunction}
    >
      {currentSize === 'LARGE' && (
        <LargeContent>
          <TopContent>
            <Octicons name="checklist" size={24} color="#480D49" />
            <TextMedium>Todo</TextMedium>
          </TopContent>
          <TaskContent>
            {todos.filter((item) => !item.done).slice(0, 3).length > 0 ? (
              todos
                .filter((item) => !item.done)
                .slice(0, 3)
                .map((todo) => (
                  <TaskCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    done={todo.done}
                    type={todo.type}
                    borderRadius
                    small
                  />
                ))
            ) : (
              <TextMedium>No task to do</TextMedium>
            )}
          </TaskContent>
        </LargeContent>
      )}
      {currentSize === 'HEADER' && (
        <HeaderContent>
          <HeaderLeftWrapper>
            <Octicons name="checklist" size={16} color="#480D49" />
            <HeaderText>Number of tasks:</HeaderText>
          </HeaderLeftWrapper>
          <TaskToDoCount>
            {todos.filter((item) => !item.done).length}
          </TaskToDoCount>
        </HeaderContent>
      )}
      {currentSize === 'SMALL' && (
        <SmallContent>
          <TopContent gap={5}>
            <Octicons name="checklist" size={16} color="#480D49" />
            <HeaderText>Todo</HeaderText>
          </TopContent>
          <TaskToDoCountBig>
            {todos.filter((item) => !item.done).length}
          </TaskToDoCountBig>
          <HeaderText>Todo tasks</HeaderText>
        </SmallContent>
      )}
      {currentSize === 'MEDIUM' && (
        <MediumContent>
          <TaskCard
            key={todos[0].id}
            id={todos[0].id}
            title={todos[0].title}
            description={todos[0].description}
            done={todos[0].done}
            type={todos[0].type}
            borderRadius
            small
          />
        </MediumContent>
      )}
    </Widget>
  );
};
