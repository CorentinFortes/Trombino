import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.0541 18.4473C4.7105 18.4473 2 15.8382 2 12.6194C2 9.40194 4.7105 6.79283 8.0541 6.79283C8.565 4.50223 10.3863 2.63284 12.8316 1.88794C15.2756 1.14434 17.9744 1.63704 19.9088 3.18794C21.8432 4.73494 22.7194 7.09704 22.2098 9.38764H23.4968C25.9837 9.38764 28 11.4156 28 13.9194C28 16.4245 25.9837 18.4525 23.4955 18.4525H8.0541" stroke="#0C3247" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

type SvgProps = {
  width?: number;
  height?: number;
};

export const WeatherIcon: React.FC<SvgProps> = ({ width, height }) => {
  return <SvgXml xml={xml} width={width ?? 24} height={height ?? 20} />;
};
