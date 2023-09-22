import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Events from './screens/Events';
import Alarm from './screens/Alarm';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createSwitchNavigator({
  Home: Home,
  Events: Events,
  Alarms: Alarm
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
