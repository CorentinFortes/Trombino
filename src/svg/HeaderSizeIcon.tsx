import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="134" height="100" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="134" height="100" rx="10" fill="#D9D9D9" fill-opacity="0.3"/>
<rect x="1" y="1" width="132" height="98" rx="9" stroke="#4E4E4E" stroke-opacity="0.3" stroke-width="2"/>
<rect x="11" y="16" width="111" height="20" rx="3.14448" fill="#505050" fill-opacity="0.2"/>
<rect x="11.3144" y="16.3144" width="110.371" height="19.3711" rx="2.83003" stroke="#9A9797" stroke-opacity="0.2" stroke-width="0.628895"/>
</svg>
`;

export const HeaderSizeIcon = () => {
  return <SvgXml xml={xml} width="134" height="100" />;
};
