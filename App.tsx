import React from 'react';
import { SafeAreaView,StatusBar,useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import AppNavigator from './src/navigation/AppNavigator';
import { ToastProvider } from 'react-native-toast-notifications';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[{flex: 1}, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <Provider store={store} >
          <ToastProvider>
            <AppNavigator/>
          </ToastProvider>
        </Provider>
    </SafeAreaView>  
  )
}

export default App;
