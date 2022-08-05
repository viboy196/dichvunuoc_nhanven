import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';
import {tintColorLight} from './constants/Colors';
import Navigation from './navigation';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store/store';
import useCachedResources from './hooks/useCachedResources';
import {Provider} from 'react-redux';

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar
              animated={true}
              backgroundColor={tintColorLight}
              barStyle={'dark-content'}
              showHideTransition={'slide'}
              hidden={false}
            />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
