import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import Toast from 'react-native-toast-message';
import toastConfig from '@ui/utils/toast/config';
import ContextOrder from '@ui/context/order';
import AppNavigation from './app';

function RootNavigation() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <ContextOrder>
            <AppNavigation />
          </ContextOrder>
          <Toast config={toastConfig} />
        </KeyboardProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default RootNavigation;
