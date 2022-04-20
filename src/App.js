import {Text, View} from 'react-native';

import MainNavigator from './navigation/index'
import {Provider} from 'react-redux';
import React from 'react';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
      </Provider>
  )
}
  
export default App;
