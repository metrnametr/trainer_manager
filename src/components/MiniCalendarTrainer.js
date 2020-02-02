import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import moment from 'moment';
import Pie from 'react-native-pie';
import theme from '../../common/theme';

const MiniCalendarTrainer = () => {
  const days = new Array(7).fill().map((it, i) => i + 1);
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 15}}>Календарь Тренировки</Text>
      <View style={styles.calendar}>
        {days.map(it => {
          return (
            <View style={styles.calendarItem}>
              <Text>
                {moment()
                  .isoWeekday(it)
                  .format('dd')}
              </Text>
              <Text style={{marginTop: 5, marginBottom: 10}}>
                {moment()
                  .isoWeekday(it)
                  .format('DD')}
              </Text>
              <View style={{width: 30, alignItems: 'center'}}>
                <Pie
                  radius={18}
                  innerRadius={16}
                  sections={[
                    {
                      percentage: 60,
                      color: theme.colors.darkGreen,
                    },
                  ]}
                  backgroundColor="#ddd"
                />
                <View style={styles.gauge}>
                  <Text style={styles.gaugeText}>60%</Text>
                </View>
              </View>
            </View>
          );
        })}
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
    marginTop: 15,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarItem: {
    alignItems: 'center',
  },
  gauge: {
    position: 'absolute',
    width: 40,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 11.5,
  },
});

export default MiniCalendarTrainer;
