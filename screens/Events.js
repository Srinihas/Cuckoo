import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Flatlist} from 'react-native';

export default class Events extends React.Component {
  render(){
    return (
      <View>
        <Text> Events Screen </Text> 
      </View>
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
