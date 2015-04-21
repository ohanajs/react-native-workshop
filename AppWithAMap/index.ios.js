/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MapPoints = require('./components/map-points');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var AppWithAMap = React.createClass({
  render() {
    return (
      <NavigatorIOS style={styles.navigator} initialRoute={{
        component: MapPoints,
        title: "Welcome"
      }} />
    )
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

AppRegistry.registerComponent('AppWithAMap', () => AppWithAMap);
