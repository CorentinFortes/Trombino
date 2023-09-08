import React from 'react';
import { View, Text, useWindowDimensions, Animated } from 'react-native';
import { PaginatorContainer } from './Paginator.style';

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <PaginatorContainer>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i}
            style={[
              {
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: '#000',
                marginHorizontal: 4,
              },
              { width: dotWidth, opacity },
            ]}
          />
        );
      })}
    </PaginatorContainer>
  );
};
