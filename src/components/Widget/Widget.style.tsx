import styled from 'styled-components/native';
import { WidgetSize } from '../../types/widgetType';

const WIDGET_SIZE: { [key in WidgetSize]: { width: string; height: string } } =
  {
    [WidgetSize.BIG]: {
      width: '100%',
      height: '200px',
    },
    [WidgetSize.MEDIUM]: {
      width: '100%',
      height: '80px',
    },
    [WidgetSize.SMALL]: {
      width: '100%',
      height: '47px',
    },
    [WidgetSize.HEADER]: {
      width: '150px',
      height: '150px',
    },
  };

export const WidgetContainer = styled.View<{
  size: 'BIG' | 'MEDIUM' | 'SMALL' | 'HEADER';
}>`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => WIDGET_SIZE[size].width};
  height: ${({ size }) => WIDGET_SIZE[size].height};
  padding: 0 20px;
  padding-top: 20px;
  border: 1px solid rgba(154, 151, 151, 0.2);
`;

export const WidgetTitle = styled.View`
  display: flex;
  gap: 6px;
`;
