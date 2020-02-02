import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, List, Button} from 'react-native-paper';
import theme from '../../common/theme';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
const {Item, Section, Subheader} = List;

const TasksList = ({title = 'Default title', items = []}) => {
  return (
    <View>
      <Section>
        <Subheader style={{color: theme.backgroundLight}}>{title}</Subheader>
        {items.map(item => (
          <Item
            style={styles.item}
            title={item.title}
            description={item.description}
            left={() => (
              <Icon
                style={{alignSelf: 'center', padding: 10}}
                color={theme.colors.darkRed}
                name="folder"
              />
            )}
            right={() => (
              <Icon
                style={{alignSelf: 'center', padding: 10}}
                color={theme.colors.darkGreen}
                size={28}
                name="check-circle"
              />
            )}
          />
        ))}
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.backgroundLight,
    marginBottom: 5,
  },
});

export default TasksList;
