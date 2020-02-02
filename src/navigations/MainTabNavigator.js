import React from 'react';
import {Platform, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MainScreen from '../screens/MainScreen';
import TaskScreen from '../screens/TasksScreen';
import theme from '../../common/theme';


// import CreateBankScreen from '../screens/CreateBankScreen';

// import { theme } from '../../theme';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        // headerLeft:(<Button onPress={() => navigation.openDrawer()} title="qwe" />),
        // header: null
      }),
    },
  },
  {
    ...config,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.backgroundLight, //theme.mainColorDark
      },
    },
  },
);

MainStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <AntIcon
      // focused={focused}
      name="sync"
      color="white"
      size={ 16 }
    />
  ),
  activeColor: 'black',
  barStyle: {
    // position: 'absolute',
    backgroundColor: theme.backgroundLight,
    // zIndex: 100,
    // top: '91%',
    // left: 0,
    // right: 0,
    // elevation: 0,
    // shadowOpacity: 0,
    // borderBottomWidth: 0,
  },
};

MainStack.path = '';


const TasksStack = createStackNavigator(
  {
    Tasks: {
      screen: TaskScreen,
      navigationOptions: ({navigation}) => ({
        // headerLeft:(<Button onPress={() => navigation.openDrawer()} title="qwe" />),
        // header: null
      }),
    },
  },
  {
    ...config,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.backgroundLight, //theme.mainColorDark
      },
    },
  },
);

TasksStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => (
    <AntIcon
      // focused={focused}
      name="sync"
      color="white"
      size={ 16 }
    />
  ),
  activeColor: 'black',
  barStyle: {
    // position: 'absolute',
    backgroundColor: theme.backgroundLight,
    // zIndex: 100,
    // top: '91%',
    // left: 0,
    // right: 0,
    // elevation: 0,
    // shadowOpacity: 0,
    // borderBottomWidth: 0,
  },
};

TasksStack.path = '';

const MainTabNavigator = createMaterialBottomTabNavigator(
  {
    Main: {screen: MainStack},
    Tasks: {screen: TasksStack},
  },
  {
    // shifting: true,  
    barStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      paddingTop: 20,
    },
  },
);

export default MainTabNavigator;
