import React from 'react';
import { StyleSheet } from 'react-native';

// import SwitchNavi from './navigation';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import Home from './components/Home';

const store = createStore(reducers, applyMiddleware(thunk));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
