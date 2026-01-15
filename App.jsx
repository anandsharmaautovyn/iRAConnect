import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/navigation'
import Store from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
}

export default App;
