import React, { useRef } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import {
  TaskCardContainer,
  TaskCardContent,
  TaskDescription,
  TaskTexts,
  TaskTitle,
  TaskTypePoint,
  ValidationContainer,
  ValidationText,
} from './TaskCard.style';
import { Ionicons } from '@expo/vector-icons';

type TaskProps = {
  title: string;
  description: string;
  done: boolean;
  type: 'urgent' | 'important' | 'normal';
  small?: boolean;
};

const TaskComponent: React.FC<TaskProps> = ({
  title,
  description,
  done,
  type,
  small,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const rightAction = () => {
    return (
      <ValidationContainer>
        <ValidationText>Make done</ValidationText>
      </ValidationContainer>
    );
  };

  return (
    <TaskCardContainer small={small}>
      <Swipeable
        renderRightActions={rightAction}
        onSwipeableOpen={console.log('open')}
      >
        <TaskCardContent small={small}>
          {done ? (
            <Ionicons name="checkmark-circle-sharp" size={20} color="#58C3A3" />
          ) : (
            <TaskTypePoint type={type} small={small} />
          )}
          <TaskTexts small={small}>
            <TaskTitle small={small}>{title}</TaskTitle>
            <TaskDescription small={small} numberOfLines={3}>
              {description}
            </TaskDescription>
          </TaskTexts>
        </TaskCardContent>
      </Swipeable>
    </TaskCardContainer>
  );
};

export const TaskCard = React.memo(TaskComponent);
