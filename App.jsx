import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Store from '@store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <Text style={{color: 'black'}}>testing</Text>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

export default App;
