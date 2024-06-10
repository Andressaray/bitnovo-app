import {useEffect} from 'react';
import {
  Animated,
  Easing,
  Modal,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
// import {BlurView} from 'expo-blur';
import {Props} from './type';
import styles from './style';

const BottomModal = ({isVisible, onClose, snapPoint, children}: Props) => {
  const colorSchema = useColorScheme();
  const {height} = useWindowDimensions();
  const slideAnim = new Animated.Value(0);
  const heightAnim = new Animated.Value(0);
  const viewColor = colorSchema === 'dark' ? styles.bgDark : styles.bgLight;

  const handleCalculate = () => {
    return (height * snapPoint) / 100;
  };

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: handleCalculate(),
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isVisible, snapPoint]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, height],
    outputRange: [0, height],
  });

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}>
      {/* {isVisible && (
        <BlurView intensity={20} style={styles.blurView} tint="dark" />
      )} */}
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <TouchableOpacity activeOpacity={1} onPress={() => {}}>
          <Animated.View
            style={[
              styles.modalContainer,
              viewColor,
              {
                transform: [{translateY}],
                height: heightAnim,
              },
            ]}>
            {children}
          </Animated.View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
export default BottomModal;
