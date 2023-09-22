import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Flatlist} from 'react-native';

export default class Alarm extends React.Component {
  render(){
    return (
      <View>
        <Text> Alarm Screen </Text>
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
    backgroundColor: 'black'
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 50,
    padding: 20,
    color: "white",
    alignSelf: 'center'
  },
  text:{
    color:'white', 
    fontWeight:'bold', 
    padding: 20, 
    alignSelf:'center',
    fontSize: 20
  }
});
