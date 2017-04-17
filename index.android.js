/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';  //用Provider来包裹着父容器就可以保存
import Reducers from './src/Reducers';
import Counter from './src/Counter';

let store = createStore(Reducers); //根据reducer来创建对应的store 来存储state和属性

export default class ReduxDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('ReduxDemo', () => ReduxDemo);
