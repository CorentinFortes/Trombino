import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  AnimatedText,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  ConfirmButtonText,
  ConfirmDeleteContainer,
  ConfirmDeleteText,
  ConfirmtButton,
  LeftActionWrapper,
  ModalContainer,
  ModalContent,
  RightActionWrapper,
  SwipeableContainer,
  TaskCardContainer,
  TaskCardContent,
  TaskDescription,
  TaskTexts,
  TaskTitle,
  TaskTypePoint,
} from './TaskCard.style';
import LottieView from 'lottie-react-native';

type TaskProps = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  type: 'urgent' | 'important' | 'normal';
  small?: boolean;
  borderRadius?: boolean;
  toRemove?: (id: string) => Promise<void>;
  toDone?: (id: string, done: boolean) => Promise<void>;
};

const LeftActions = (done: boolean) => {
  return (
    <LeftActionWrapper>
      <AnimatedText>
        {done ? (
          <Feather name="x-square" size={24} color="white" />
        ) : (
          <Feather name="check-square" size={24} color="white" />
        )}
      </AnimatedText>
    </LeftActionWrapper>
  );
};

const RightActions = () => {
  return (
    <RightActionWrapper>
      <AnimatedText>
        <Ionicons name="trash-bin-outline" size={24} color="white" />
      </AnimatedText>
    </RightActionWrapper>
  );
};

const TaskComponent: React.FC<TaskProps> = ({
  id,
  title,
  description,
  done,
  type,
  small,
  toRemove,
  toDone,
  borderRadius,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoneModal, setIsDoneModal] = useState(false);
  const swipeableRef = useRef(null);
  const animation: React.LegacyRef<LottieView> = useRef(null);
  const onSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && toDone) {
      if (done === false) {
        setIsDoneModal(true);
        animation.current?.play();
      }
      toDone(id, !done);
      swipeableRef.current.close();
    }
    if (direction === 'right') {
      setIsModalOpen(true);
    }
  };
  const deleteTask = () => {
    if (toRemove) {
      toRemove(id);
    }
    setIsModalOpen(false);
    swipeableRef.current.close();
  };
  return (
    <>
      <TaskCardContainer small={small} {...props} borderRadius={borderRadius}>
        <SwipeableContainer
          enabled={toRemove !== undefined && toDone !== undefined}
          ref={swipeableRef}
          renderLeftActions={() => LeftActions(done)}
          renderRightActions={RightActions}
          onSwipeableOpen={(direction) => onSwipe(direction)}
        >
          <TaskCardContent small={small} borderRadius={borderRadius}>
            {done ? (
              <Ionicons
                name="checkmark-circle-sharp"
                size={16}
                color="#58C3A3"
              />
            ) : (
              <TaskTypePoint type={type} small={small} />
            )}
            <TaskTexts small={small}>
              <TaskTitle small={small}>{title}</TaskTitle>
              <TaskDescription small={small} numberOfLines={small ? 1 : 3}>
                {description}
              </TaskDescription>
            </TaskTexts>
          </TaskCardContent>
        </SwipeableContainer>
      </TaskCardContainer>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ConfirmDeleteContainer>
              <ConfirmDeleteText>
                Are you sure you want to delete this task?
              </ConfirmDeleteText>
              <ButtonsContainer>
                <ConfirmtButton onPress={() => deleteTask()}>
                  <ConfirmButtonText>Confirm</ConfirmButtonText>
                </ConfirmtButton>
                <CancelButton
                  onPress={() => {
                    setIsModalOpen(false);
                    swipeableRef.current.close();
                  }}
                >
                  <CancelButtonText>Cancel</CancelButtonText>
                </CancelButton>
              </ButtonsContainer>
            </ConfirmDeleteContainer>
          </ModalContent>
        </ModalContainer>
      )}
      {isDoneModal && (
        <ModalContainer>
          <ModalContent>
            <LottieView
              ref={animation}
              source={require('../../../assets/animation_confirmation.json')}
              loop={false}
              onAnimationFinish={() => setIsDoneModal(false)}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export const TaskCard = React.memo(TaskComponent);
