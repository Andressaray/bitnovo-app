import toast from 'react-native-toast-message';

const toastMessage = ({
  type,
  text1 = '',
  text2 = '',
}: {
  text1: string;
  text2: string;
  type: 'info' | 'success' | 'error';
}) => {
  toast.show({
    type,
    text1,
    text2,
  });
};

export default toastMessage;
