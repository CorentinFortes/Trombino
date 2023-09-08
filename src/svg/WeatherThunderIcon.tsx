import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="146" height="160" viewBox="0 0 146 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.75 68.9653C139.75 69.4216 139.743 69.8762 139.728 70.3288C146.14 73.8205 150.5 80.6826 150.5 88.5768C150.5 98.5263 143.574 106.836 134.343 108.825L140.743 96.8894C141.805 95.121 140.531 92.8697 138.468 92.8697H138.033H131.602C131.09 92.8697 130.735 92.3572 130.916 91.8775L136.059 78.2475L136.127 78.0734C136.877 76.1501 135.459 74.0746 133.394 74.0746H133.039H111.278H111.03C109.713 74.0746 108.558 74.9521 108.204 76.2206L108.163 76.3678L99.2974 108.189L98.9942 109.278L49.45 109.278C34.0137 109.278 21.5 96.5951 21.5 80.9501C21.5 65.3052 34.0137 52.6224 49.45 52.6224C54.1082 52.6224 58.5003 53.7774 62.3626 55.8201C67.7406 40.0104 82.5492 28.6528 99.9751 28.6528C121.942 28.6528 139.75 46.7014 139.75 68.9653Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.3603 119.475C50.9719 117.593 52.9935 116.563 54.8756 117.175C56.7578 117.786 57.7878 119.808 57.1763 121.69L50.8675 141.106C50.2559 142.988 48.2344 144.018 46.3522 143.407C44.4701 142.795 43.44 140.774 44.0516 138.892L50.3603 119.475ZM69.3036 117.175C67.4215 116.563 65.3999 117.593 64.7884 119.475L52.5788 157.052C51.9673 158.935 52.9973 160.956 54.8794 161.568C56.7616 162.179 58.7832 161.149 59.3947 159.267L71.6043 121.69C72.2158 119.808 71.1858 117.786 69.3036 117.175ZM83.7316 117.175C81.8495 116.563 79.8279 117.593 79.2164 119.475L69.9572 147.972C69.3457 149.854 70.3757 151.876 72.2579 152.487C74.14 153.099 76.1616 152.069 76.7731 150.187L86.0323 121.69C86.6438 119.808 85.6138 117.786 83.7316 117.175ZM98.1589 117.175C96.2768 116.563 94.2552 117.593 93.6437 119.475L87.3349 138.892C86.7234 140.774 87.7534 142.795 89.6356 143.407C91.5177 144.018 93.5393 142.988 94.1508 141.106L100.46 121.69C101.071 119.808 100.041 117.786 98.1589 117.175Z" fill="#B4F5F2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M113.04 78.3196C112.391 78.3196 111.824 78.755 111.655 79.3813L104.123 107.436C103.879 108.347 104.565 109.241 105.507 109.241H115.619C116.474 109.241 117.139 109.986 117.043 110.836L114.338 134.775C114.159 136.361 116.315 137.009 117.04 135.587L135.86 98.6314C136.346 97.6778 135.653 96.5476 134.583 96.5476H126.317C125.3 96.5476 124.607 95.5191 124.988 94.5768L130.766 80.2903C131.147 79.3481 130.454 78.3196 129.437 78.3196H113.04Z" fill="#FFF686"/>
</svg>
`;

export const WeatherThunderIcon = ({ ...props }) => {
  return <SvgXml xml={xml} width="140" height="141" {...props} />;
};