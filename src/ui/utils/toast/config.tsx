import {
  BaseToast,
  ErrorToast,
  ToastProps,
  InfoToast,
} from 'react-native-toast-message';
import styles from './style';

const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  info: (props: ToastProps) => (
    <InfoToast
      {...props}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={styles.contentError}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

export default toastConfig;
