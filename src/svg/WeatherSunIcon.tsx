import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="140" height="141" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11_1135)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M86 148.35C120.435 148.35 148.35 120.435 148.35 86C148.35 51.565 120.435 23.65 86 23.65C51.565 23.65 23.65 51.565 23.65 86C23.65 120.435 51.565 148.35 86 148.35ZM150.5 86C150.5 121.622 121.622 150.5 86 150.5C50.3776 150.5 21.5 121.622 21.5 86C21.5 50.3776 50.3776 21.5 86 21.5C121.622 21.5 150.5 50.3776 150.5 86Z" fill="#FFF308" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.6418 139.75C115.525 139.75 139.75 115.525 139.75 85.6417C139.75 55.7585 115.525 31.5334 85.6418 31.5334C55.7585 31.5334 31.5334 55.7585 31.5334 85.6417C31.5334 115.525 55.7585 139.75 85.6418 139.75ZM142.617 85.6417C142.617 117.108 117.108 142.617 85.6418 142.617C54.1753 142.617 28.6667 117.108 28.6667 85.6417C28.6667 54.1753 54.1753 28.6667 85.6418 28.6667C117.108 28.6667 142.617 54.1753 142.617 85.6417Z" fill="#FFF308" fill-opacity="0.6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M85.6416 134.017C112.358 134.017 134.017 112.358 134.017 85.6417C134.017 58.9249 112.358 37.2667 85.6416 37.2667C58.9248 37.2667 37.2666 58.9249 37.2666 85.6417C37.2666 112.358 58.9248 134.017 85.6416 134.017Z" fill="#FFEC65"/>
</g>
<defs>
<clipPath id="clip0_11_1135">
<rect width="129" height="129" fill="white" transform="translate(21.5 21.5)"/>
</clipPath>
</defs>
</svg>

`;

export const WeatherSunIcon = ({ ...props }) => {
  return <SvgXml xml={xml} width="140" height="141" {...props} />;
};
