var React = require('react-native');
var MapDisplay = require('../map-display');
const REQUEST_URL = "SECRET!!!";

var {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight
} = React;

var MapPoints = React.createClass({
  componentDidMount() {
    this.fetchData();
  },
  fetchData() {
    fetch(REQUEST_URL)
      .then((response => response.json()))
      .then((responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      }))
      .done();
  },
  getInitialState () {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: dataSource
    }
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(row) => <MapRow row={row} navigator={this.props.navigator} />} />
    );
  }
});

var MapRow = React.createClass({
  selected() {
    var latitude = this.props.row.geometry.latitude;
    var longitude = this.props.row.geometry.longitude;

    this.props.navigator.push({
      title: "Map",
      component: MapDisplay,
      passProps: {
        latitude: latitude,
        longitude: longitude,
        title: "Point"
      }
    });
  },
  render() {
    var latitude = this.props.row.geometry.latitude;
    var longitude = this.props.row.geometry.longitude;
    var type = this.props.row.type;
    var text = `${type}\nLatitude: ${latitude}\nLongitude: ${longitude}`;

    return (
      <TouchableHighlight onPress={this.selected}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
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
