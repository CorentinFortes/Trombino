import styled from 'styled-components/native';
import { WidgetSize } from '../../types/widgetType';

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

export const WidgetContainer = styled.View<{
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
