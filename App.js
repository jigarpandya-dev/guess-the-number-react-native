import React, {useEffect, useCallback, useState} from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Logs} from 'expo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Login from './screens/auth/Login';
import ForgotPassword from './screens/auth/ForgotPassword';
import Todo from './screens/game/Todo';
import BottomTabs from './screens/BottomTabs';
import Colors from './utils/Colors';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  Logs.enableExpoCliLogging();

  const LoadFonts = async () => {
    try {
      await Font.loadAsync({
        cormorantgaramond_bold: require('./assets/fonts/cormorantgaramond_bold.ttf'),
      });
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      console.log('app is ready');
      SetIsReady(true);
    }
  };

  useEffect(() => {
    console.log('loading fonts');
    LoadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log('use callback called...');
    if (IsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      console.log('hidining splash screen');
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return null;
  } else {
    onLayoutRootView();
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'beige',
          },
          headerTintColor: Colors.maroon,
          headerTitleStyle: {
            fontFamily: 'cormorantgaramond_bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{title: 'Bottom Tabs'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: 'Forgot Password ?',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color={Colors.maroon}
              />
            ),
          }}
        />
        <Stack.Screen name="Home" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
