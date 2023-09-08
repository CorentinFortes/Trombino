import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="150" height="141" viewBox="0 0 150 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2835 77.4C26.8471 77.4 14.3335 64.8864 14.3335 49.45C14.3335 34.0136 26.8471 21.5 42.2835 21.5C57.7198 21.5 70.2335 34.0136 70.2335 49.45C70.2335 51.429 68.6292 53.0333 66.6501 53.0333C64.6711 53.0333 63.0668 51.429 63.0668 49.45C63.0668 37.9717 53.7618 28.6667 42.2835 28.6667C30.8051 28.6667 21.5001 37.9717 21.5001 49.45C21.5001 60.9283 30.8051 70.2333 42.2835 70.2333C42.5289 70.2333 42.7686 70.258 43.0001 70.305C43.2317 70.258 43.4713 70.2333 43.7167 70.2333L154.083 70.2333C156.062 70.2333 157.667 71.8376 157.667 73.8167C157.667 75.7957 156.062 77.4 154.083 77.4L43.7167 77.4C43.4713 77.4 43.2317 77.3753 43.0001 77.3283C42.7686 77.3753 42.5289 77.4 42.2835 77.4ZM157.667 88.15C157.667 90.129 156.062 91.7333 154.083 91.7333L70.2333 91.7333C70.228 91.7333 70.2226 91.7333 70.2173 91.7333C61.1212 91.742 53.75 99.1185 53.75 108.217C53.75 117.32 61.1298 124.7 70.2333 124.7C72.2123 124.7 73.8167 126.304 73.8167 128.283C73.8167 130.262 72.2123 131.867 70.2333 131.867C57.1718 131.867 46.5833 121.278 46.5833 108.217C46.5833 96.3364 55.3432 86.5021 66.7563 84.8205C67.1667 84.6567 67.6145 84.5667 68.0834 84.5667H70.2197C70.2243 84.5667 70.2288 84.5667 70.2333 84.5667C70.2351 84.5667 70.2368 84.5667 70.2386 84.5667L154.083 84.5667C156.062 84.5667 157.667 86.171 157.667 88.15ZM154.083 98.9C156.062 98.9 157.667 100.504 157.667 102.483C157.667 104.462 156.062 106.067 154.083 106.067L88.8668 106.067C86.8877 106.067 85.2834 104.462 85.2834 102.483C85.2834 100.504 86.8877 98.9 88.8668 98.9L154.083 98.9Z" fill="white"/>
</svg>
`;

export const WeatherWindIcon = ({ ...props }) => {
  return <SvgXml xml={xml} width="140" height="141" {...props} />;
};