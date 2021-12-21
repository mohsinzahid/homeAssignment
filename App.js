import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import MainAppNav from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store, {persistor} from './src/redux/storeConfig';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={false}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView style={styles.safeArea}>
          <MainAppNav />
        </SafeAreaView>
      </PersistGate>
    </StoreProvider>
  );
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
