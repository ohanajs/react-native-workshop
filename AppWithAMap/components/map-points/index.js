var React = require('react-native');
var mockData = require('./mock_data');

var {
  StyleSheet,
  View,
  Text,
  ListView
} = React;

var MapPoints = React.createClass({
  getInitialState () {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: dataSource.cloneWithRows(mockData)
    }
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(row) => <MapRow row={row} />} />
    );
  }
});

var MapRow = React.createClass({
  render() {
    var latitude = this.props.row.geometry.latitude;
    var longitude = this.props.row.geometry.longitude;
    var text = `Latitude: ${latitude}\nLongitude: ${longitude}`;

    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 0.5,
    borderColor: '#DDD'
  },
  text: {
    fontSize: 20,
    margin: 10,
  }
});

module.exports = MapPoints;
