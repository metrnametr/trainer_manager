/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ListView,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DailyTaskInfo from '../components/DailyTaskInfo';
import theme from '../../common/theme';
import TasksList from '../containers/TasksList';
import MiniCalendarTrainer from '../components/MiniCalendarTrainer';

const MainScreen: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <DailyTaskInfo />
      <MiniCalendarTrainer />
      <TasksList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundDark,
    flex: 1,
    padding: theme.screenPadding,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  list: {
    flex: 2,
  },
  listItem: {
    padding: 10,
    // backgroundColor: 'black'
  },
});

export default MainScreen;
