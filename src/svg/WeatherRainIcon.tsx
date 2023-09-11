import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="180" height="187" viewBox="0 0 180 187" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M164.969 59.1333C164.99 58.5017 165 57.8674 165 57.2307C165 26.1647 140.152 0.980713 109.5 0.980713C85.1849 0.980713 64.5218 16.8284 57.0176 38.8886C51.6283 36.0382 45.4999 34.4266 39 34.4266C17.4609 34.4266 0 52.1235 0 73.9537C0 95.7838 17.4609 113.481 39 113.481L109.5 113.481C109.525 113.481 109.55 113.481 109.575 113.481H151.5C167.24 113.481 180 100.548 180 84.5955C180 73.5804 173.917 64.0053 164.969 59.1333Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.7023 124.499C64.0761 123.646 61.2553 125.083 60.402 127.71L43.3654 180.143C42.5121 182.769 43.9493 185.59 46.5756 186.443C49.2018 187.297 52.0226 185.859 52.8759 183.233L69.9125 130.8C70.7659 128.174 69.3286 125.353 66.7023 124.499ZM126.882 124.499C124.256 123.646 121.435 125.083 120.582 127.71L103.545 180.143C102.692 182.769 104.129 185.59 106.755 186.443C109.382 187.297 112.202 185.859 113.056 183.233L130.092 130.8C130.946 128.174 129.508 125.353 126.882 124.499ZM80.5343 127.71C81.3876 125.083 84.2084 123.646 86.8347 124.499C89.4609 125.353 90.8982 128.174 90.0449 130.8L77.1251 170.563C76.2718 173.189 73.451 174.626 70.8247 173.773C68.1985 172.92 66.7612 170.099 67.6145 167.473L80.5343 127.71ZM146.765 124.499C144.139 123.646 141.318 125.083 140.465 127.71L127.545 167.473C126.692 170.099 128.129 172.92 130.755 173.773C133.382 174.626 136.202 173.189 137.056 170.563L149.976 130.8C150.829 128.174 149.392 125.353 146.765 124.499ZM40.2699 127.71C41.1233 125.083 43.944 123.646 46.5703 124.499C49.1966 125.353 50.6338 128.174 49.7805 130.8L40.9776 157.892C40.1243 160.519 37.3035 161.956 34.6772 161.103C32.0509 160.249 30.6137 157.429 31.467 154.802L40.2699 127.71ZM106.966 124.499C104.339 123.646 101.519 125.083 100.665 127.71L91.8624 154.802C91.0091 157.429 92.4464 160.249 95.0726 161.103C97.6989 161.956 100.52 160.519 101.373 157.892L110.176 130.8C111.029 128.174 109.592 125.353 106.966 124.499Z" fill="#B4F5F2"/>
</svg>
`;

export const WeatherRainIcon = ({ ...props }) => {
  return <SvgXml xml={xml} width="140" height="141" {...props} />;
};
