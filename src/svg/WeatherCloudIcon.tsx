import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="180" height="112" viewBox="0 0 180 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M164.969 57.5987C164.99 56.9731 165 56.3449 165 55.7143C165 24.9441 140.152 0 109.5 0C85.1849 0 64.5218 15.6968 57.0176 37.5468C51.6283 34.7236 45.4999 33.1274 39 33.1274C17.4609 33.1274 0 50.6557 0 72.278C0 93.9002 17.4609 111.429 39 111.429L109.575 111.429H151.5C167.24 111.429 180 98.6194 180 82.8185C180 71.9082 173.917 62.4243 164.969 57.5987Z" fill="white"/>
</svg>
`;

type SvgProps = {
  width?: number;
  height?: number;
};

export const WeatherCloudIcon: React.FC<SvgProps> = ({
  width,
  height,
  ...props
}) => {
  return (
    <SvgXml xml={xml} width={width ?? 140} height={height ?? 141} {...props} />
  );
};
