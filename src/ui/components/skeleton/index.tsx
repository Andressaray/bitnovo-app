import React, {useEffect, useRef} from 'react';
import {Animated, type ViewStyle} from 'react-native';
import {colors} from '@ui/theme/index';

interface Props {
  styles: ViewStyle;
}
const Skeleton = ({styles}: Props) => {
  const opacity = useRef(new Animated.Value(0.65));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 0.65,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity.current, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        backgroundColor: colors.light.gray100,
        opacity: opacity.current,
        ...styles,
      }}
    />
  );
};

export default Skeleton;
