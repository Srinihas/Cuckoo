import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Flatlist, SafeAreaView, Dimensions} from 'react-native';

export default class Home extends React.Component {
  render(){
    return (
      <View style={{backgroundColor: "black", width: Dimensions.get('window').width}}>
        <View>
          <Text style={styles.titleText}> Home Screen </Text>
        </View>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate("Alarms")
        }}>
          <Text style={styles.text}> Alarms </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate("Events")
        }}>
          <Text  style={styles.text}> Events </Text>
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
