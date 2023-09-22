import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Flatlist} from 'react-native';

export default class Home extends React.Component {
  render(){
    return (
      <View>
        <Text> Home Screen </Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate("Home");
        }}>
          <Text style={styles.text}> Go Back </Text>
        </TouchableOpacity>
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
