import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../../common/theme';
import moment from 'moment';

import Icon from 'react-native-vector-icons/FontAwesome';


const DailyTaskInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text>Ежедневные упражнения</Text>
        <Text>{moment().format('dd')}</Text>
      </View>
      <View style={styles.containerText}>
        <Text>Выполнено упражнений</Text>
        <Text>1/3</Text>
      </View>
      <View style={styles.containerText}>
        <Text>Потрачено времени</Text>
        <Text>0:30 минут</Text>
      </View>
      <View style={styles.containerText}>
        <Text>Общее время</Text>
        <Text>15:00 минут</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundLight,
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
  },
  date: {
    alignItems: 'center',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DailyTaskInfo;
