import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as ReduxProvider} from 'react-redux';

import NavigationService from './NavigationService';
import store from './configureStore';
import ListSeller from './appointment/screen/listSellers';
import AuthScreen from './auth/component';
import DashboardScreen from './dashboard/dashboard';
import ListAppointment from './appointment/screen/listAppointement';
import ListSlot from './appointment/screen/listSlots';

const AppStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: () => ({
      title: 'Dashboard',
    }),
  },
  ListSeller: {
    screen: ListSeller,
    navigationOptions: () => ({
      title: 'list seller',
    }),
  },
  ListSlot: {
    screen: ListSlot,
    navigationOptions: () => ({
      title: 'list slots',
    }),
  },
  ListAppointment: {
    screen: ListAppointment,
    navigationOptions: () => ({
      title: 'list appointement',
    }),
  },
});
const AuthStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: () => ({
      title: 'Sign In',
    }),
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ReduxProvider>
    );
  }
}
