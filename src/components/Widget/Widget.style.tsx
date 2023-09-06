import styled from 'styled-components/native';
import { WidgetSize } from '../../types/widgetType';
import { Modal } from 'react-native';

const WIDGET_SIZE: {
  [key in WidgetSize]: {
    width: string;
    height: string;
    padding: string;
    alignItems: string;
    justifyContent: string;
  };
} = {
  [WidgetSize.LARGE]: {
    width: '100%',
    height: '200px',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  [WidgetSize.MEDIUM]: {
    width: '100%',
    height: '80px',
    padding: '10px 20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  [WidgetSize.SMALL]: {
    width: '150px',
    height: '150px',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  [WidgetSize.HEADER]: {
    width: '100%',
    height: '47px',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const WidgetContainer = styled.TouchableOpacity<{
  size: 'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER';
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ size }) => WIDGET_SIZE[size].alignItems};
  justify-content: ${({ size }) => WIDGET_SIZE[size].justifyContent};
  width: ${({ size }) => WIDGET_SIZE[size].width};
  height: ${({ size }) => WIDGET_SIZE[size].height};
  max-width: ${({ size }) => WIDGET_SIZE[size].width};
  max-height: ${({ size }) => WIDGET_SIZE[size].height};
  padding: ${({ size }) => WIDGET_SIZE[size].padding};
  border: 2px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
`;

export const WidgetTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ModalContainer = styled(Modal)``;

export const ModalContent = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const SelectSizeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fafaff;
  border: 2px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
  width: 100%;
  transition: ease-out 150ms;
`;

export const CrossButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-family: 'Rubik_SemiBold';
  font-size: 20px;
  color: #1e1e1e;
`;

export const SizeContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  padding-top: 10px;
`;

export const SizeButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
