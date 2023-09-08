import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="140" height="141" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M139.728 77.1124C139.743 76.6641 139.75 76.2138 139.75 75.7619C139.75 53.7099 121.942 35.8333 99.9751 35.8333C82.5492 35.8333 67.7406 47.0827 62.3626 62.7419C58.5003 60.7186 54.1082 59.5746 49.45 59.5746C34.0136 59.5746 21.5 72.1366 21.5 87.6325C21.5 103.128 34.0136 115.69 49.45 115.69L100.029 115.69H130.075C141.355 115.69 150.5 106.511 150.5 95.1866C150.5 87.3675 146.14 80.5708 139.728 77.1124Z" fill="white"/>
</svg>

`;

export const WeatherCloudIcon = ({ ...props }) => {
  return <SvgXml xml={xml} width="140" height="141" {...props} />;
};
