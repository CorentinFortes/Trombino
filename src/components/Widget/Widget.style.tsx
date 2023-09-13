import styled from 'styled-components/native';
import { WidgetSize } from '../../types/widgetType';
import { Dimensions } from 'react-native';
import { Button, Modal } from 'react-native-paper';

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
    width: (Dimensions.get('window').width - 40).toString() + 'px',
    height: '200px',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  [WidgetSize.MEDIUM]: {
    width: (Dimensions.get('window').width - 40).toString() + 'px',
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
    width: (Dimensions.get('window').width - 40).toString() + 'px',
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
  min-width: ${({ size }) => WIDGET_SIZE[size].width};
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

export const ModalContainer = styled.Modal``;

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

export const CrossButton = styled(Button)`
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
  flex-direction: row;
  width: 100%;
  gap: 30px;
  padding-top: 10px;
  justify-content: space-around;
`;

export const SizeButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled(Button)`
  background-color: #fafaff;
  border-radius: 10px;
  border: 1px solid #f13838;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DeleteButtonText = styled.Text`
  color: #f13838;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;
