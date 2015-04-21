var React = require('react-native');

var {
  MapView,
  StyleSheet
} = React;

var MapDisplay = React.createClass({
  render() {
    var {
      latitude,
      longitude,
      title
    } = this.props;

    var annotation = [{latitude, longitude, title}];
    var region = {latitude, longitude, latitudeDelta: 1, longitudeDelta: 1};

    return (
      <MapView style={styles.map} annotations={annotation} region={region} />
    );
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

module.exports = MapDisplay;
