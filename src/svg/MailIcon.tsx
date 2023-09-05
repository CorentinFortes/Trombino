import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3.92857C2 3.28447 2.28095 2.66676 2.78105 2.21131C3.28115 1.75587 3.95942 1.5 4.66667 1.5H23.3333C24.0406 1.5 24.7189 1.75587 25.219 2.21131C25.719 2.66676 26 3.28447 26 3.92857M2 3.92857V16.0714C2 16.7155 2.28095 17.3332 2.78105 17.7887C3.28115 18.2441 3.95942 18.5 4.66667 18.5H23.3333C24.0406 18.5 24.7189 18.2441 25.219 17.7887C25.719 17.3332 26 16.7155 26 16.0714V3.92857M2 3.92857L14 11.2143L26 3.92857" stroke="#1E1E1E" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

type SvgProps = {
  width?: number;
  height?: number;
};

export const MailIcon: React.FC<SvgProps> = ({ width, height }) => {
  return <SvgXml xml={xml} width={width ?? 24} height={height ?? 20} />;
};
