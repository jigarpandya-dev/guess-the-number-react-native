import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Game from './game/Game';
import StartGameScreen from './game/StartGameScreen';
import Colors from '../utils/Colors';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: 'beige',
        tabBarInactiveBackgroundColor: 'beige',
      }}>
      <Tab.Screen
        name="StartGameScreen"
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? Colors.maroon : 'grey',
                fontSize: 16,
                fontFamily: 'cormorantgaramond_bold',
                marginStart: 16,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              color={focused ? Colors.maroon : 'grey'}
              size={20}
            />
          ),
        }}>
        {() => <Game navigation={navigation}></Game>}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? Colors.maroon : 'grey',
                fontSize: 16,
                fontFamily: 'cormorantgaramond_bold',
                marginStart: 16,
              }}>
              Settings
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="funnel"
              color={focused ? Colors.maroon : 'grey'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
