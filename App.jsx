import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Router from './src/navigation'
import Store from '@store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

const AppContent = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
    >
      <Router />
    </View>
  );
};

export default App;
