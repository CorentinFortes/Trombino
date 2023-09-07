import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05131 10.6923V7.3034C5.05131 6.81944 4.85905 6.3553 4.51684 6.01309C4.17462 5.67087 3.71048 5.47862 3.22652 5.47862M3.22652 5.47862C2.74256 5.47862 2.27841 5.67087 1.9362 6.01309C1.59399 6.3553 1.40173 6.81944 1.40173 7.3034V10.6923H10.7863V7.56409C10.7863 7.01099 10.5666 6.48054 10.1755 6.08944C9.78443 5.69834 9.25398 5.47862 8.70088 5.47862H3.22652ZM6.09404 5.47862V1.30768H8.17951L9.22225 2.35041L8.17951 3.39315H6.09404M2.96584 7.56409H3.4872" stroke="white" stroke-width="1.04274" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

type SvgProps = {
  width?: number;
  height?: number;
};

export const BoxIcon: React.FC<SvgProps> = ({ width, height }) => {
  return <SvgXml xml={xml} width={width ?? 12} height={height ?? 12} />;
};
